/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SingleHeader from "./singleheader"
import Footer from "./footer"

const Single = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SingleTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SingleHeader siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      <Footer />
    </>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Single
