const { createFilePath } = require(`gatsby-source-filesystem`)

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allStrapiBlog(
        sort: {updatedAt: DESC}
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-list pages with pagination
  // https://github.com/NickyMeuleman/gatsby-paginated-blog/blob/master/gatsby-node.js
  const posts = result.data.allStrapiBlog.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blogs.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  const blogView = path.resolve(`src/templates/blog-view.tsx`)
  const blogResult = await graphql(`
    query {
      allStrapiBlog {
        edges {
          node {
            slug
          }
          next {
            slug
          }
          previous {
            slug
          }
        }
      }
    }
  `)

  // console.log(blogResult.data.allStrapiBlog.edges);

  // I dont know how to run optionals here so I'll skip that with queries
  blogResult.data.allStrapiBlog.edges.forEach(({ node, next, previous }) => {

    if (next && previous) {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogView,
        context: {
          slug: node.slug,
          next: next.slug,
          previous: previous.slug,
        },
      })
    } else if (next) {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogView,
        context: {
          slug: node.slug,
          previous: null,
          next: next.slug,
        },
      })
    } else if (previous) {

      createPage({
        path: `/blog/${node.slug}`,
        component: blogView,
        context: {
          slug: node.slug,
          previous: previous.slug,
          next: null,
        },
      })
    } else {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogView,
        context: {
          slug: node.slug,
          previous: null,
          next: null,
        },
      })
    }
  })

}