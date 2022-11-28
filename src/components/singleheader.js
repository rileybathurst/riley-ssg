import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import PrimaryMenu from "./primarymenu"

const SingleHeader = ({ siteTitle }) => (
  <>
    {/* I can get rid of this soon I'm just using it as reference */}

    {/* <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header> */}

    <header className='site-header single single-site-header'>
      {/* this multi class thing is pretty horrible but I have some really messy classes I need to tidy up */}

      <div className="site-branding-text">
        <h1>
          <Link to="/" rel="home" className="site-title">
            {siteTitle}
          </Link>
        </h1>

      </div>

      <hr className="site-header-hero-hr hero-hr" />

      <hr className="single-site-header-color-block_1" />
      <hr className="single-site-header-color-block_2" />

      {/* Im not quite sure about how to do this */}
      <div className="breadcrumbs">breadcrumbs</div>

      {/*
    Currently not using the icon in single pages as were going with the open button for the menu in a similar spot
    <div className="header-logo">
      <Link to="/" rel="home" aria-label="riley bathurst design home">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.36 150.54" className="header-logo"><path d="M45.87 82.26l.74.89 24.75 30.14-4.21 11.06-23.9 3.86 17.27 21.2a54.16 54.16 0 0 0 9.14-2.56h-.25l20.06-53.28-20.12-24.39q12-6.92 18.25-15t6.22-21.16q0-14.44-10.37-23.72a37.58 37.58 0 0 0-3.08-2.45L68.63 37.72 45.06 29.1 56.15.04Q39.47.31 28.87 9.09q-11 9.02-11 25.14a36.57 36.57 0 0 0 3.5 15.61 61.17 61.17 0 0 0 9.9 14.72l-3.1 1.9q-15 9.3-21.6 18.79a35.57 35.57 0 0 0-2.21 3.71zm-1.11-52.25l23.43 8.62a17 17 0 0 1-8.54 8.27 54.18 54.18 0 0 1-10.78 3.54 125.52 125.52 0 0 1-4-12.48 16.25 16.25 0 0 1-.16-7.95z"/><path d="M13.71 138.31l19.78-52-30.17 4.87A41.57 41.57 0 0 0 0 108.08q0 16.1 12.73 29.3c.32.3.65.61.98.93zm98.93-67.68l-24.08 63.75h.06l-4.75 12.47h10.67l28.66-76.22zm-6.31 76.21h27.04l-18.64-22.26-8.4 22.26zM26.35 110.7L15.3 139.77q12.36 10.77 32.8 10.78a67.37 67.37 0 0 0 10.12-.75z"/></svg>
      </Link>
    </div>
*/}

      {/*     <nav className="navigation-top">
      <PrimaryMenu />
    </nav> */}

      {/* this is going to be a little more complex as the breadcrumbs is going to flow over the main content */}
      {/* <div className="spine">{SiteDescription}</div> */}

    </header>
  </>
)

SingleHeader.propTypes = {
  siteTitle: PropTypes.string,
  // SiteDescription: PropTypes.string,
}

SingleHeader.defaultProps = {
  siteTitle: ``,
  // SiteDescription: ``,
}

export default SingleHeader
