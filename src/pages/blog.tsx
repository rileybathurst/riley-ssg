// Gatsby supports TypeScript natively!
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <h1>Blog</h1>
    <main>
      <StaticQuery
        query={query}
        render={data => (
          <ul>
            {
              data.allStrapiBlog.edges.map(blog => (
                <li key={blog.node.id}>
                  <Link to={`/blog/${blog.node.slug}`}>{blog.node.title}</Link>
                </li>
              ))
            }
          </ul>
        )}
      />
    </main>
  </Layout>
)

export default BlogPage

const query = graphql`
      query BlogQuery {
        allStrapiBlog {
        edges {
        node {
        title
        slug
      id
      }
    }
  }
}
      `