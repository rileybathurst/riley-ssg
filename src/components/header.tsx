import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {

  // keep an eye if this needs to come from a hook
  const { strapiImageGrab } = useStaticQuery(graphql`
      query headshotQuery {
        strapiImageGrab(name: {eq: "headshot"}) {
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
        }
      }
    `)

  return (
    <header className='header__concept'>
      {/*       <GatsbyImage
        image={strapiImageGrab.image.localFile.childImageSharp.gatsbyImageData}
        alt={strapiImageGrab.image.alternativeText}
        className="headshot"
      /> */}
      <div className='breadcrumbs'>HOME</div>
      <div className='spine'>PUSHING PIXELS</div>
      <h1 className='riley'>RILEY</h1>
      <h2 className='bathurst'>BATHURST</h2>
    </header>
  )
}

export default Header
