// Gatsby supports TypeScript natively!
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Header from "../src/components/header"
import Footer from "../src/components/footer"

function When({ published, updated }) {
  if (published === updated) {
    return <time dateTime={published}>{published}</time>
  }
  return (
    <time dateTime={updated}>
      Updated <time dateTime={updated}>{updated}</time><time dateTime={published}><del>{published}</del></time>
    </time>
  )
}

const BlogPage = () => (
  <>
    <Header />
    <h1 className="passage">Blog</h1>
    <main>
      <StaticQuery
        query={query}
        render={data => (
          <ul className="passage allblogs">
            {
              data.allStrapiBlog.edges.map(blog => (
                <li
                  key={blog.node.id}
                // className=""
                >
                  <Link to={`/blog/${blog.node.slug}`}>
                    <h2>
                      {blog.node.title}
                    </h2>
                    <When published={blog.node.publishedAt} updated={blog.node.updatedAt} />
                  </Link>
                </li>
              ))
            }
          </ul>
        )}
      />
    </main>
    <Footer />
  </>
)

export default BlogPage

const query = graphql`
  query BlogQuery {
    allStrapiBlog(
      # sort: {updatedAt: DESC}
      # limit: $limit
      # skip: $skip
      ) {
      edges {
        node {
          id
          title
          slug
          publishedAt(formatString: "MMM YYYY")
          updatedAt(formatString: "MMM YYYY")
        }
      }
    }
  }
`