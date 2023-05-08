// ! im getting rid of this so its gatsby node to have pagination
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const StyleguidesPage = () => (
  <>
    <Header />
    <h1>styleguides</h1>
    <main>
      <StaticQuery
        query={query}
        render={data => (
          <ul>
            {
              data.allStrapiStyleguide.edges.map(styleguides => (
                <li key={styleguides.node.id}>
                  <Link to={`/styleguide/${styleguides.node.slug}`}>{styleguides.node.name}</Link>
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

export default StyleguidesPage

const query = graphql`
  query StyleguidesQuery {
    allStrapiStyleguide {
      edges {
        node {
          name
          slug
          id
        }
      }
    }
  }
`