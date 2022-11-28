import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import PrimaryMenu from "./primarymenu"

const Header = ({ siteTitle }) => (
  <>
    <header className='site-header'>

      <div className="site-branding-text">
        <h1>
          <Link to="/" rel="home" className="site-title">
            {siteTitle}
          </Link>
        </h1>
      </div>

      {/* Im not quite sure about how to do this */}
      <div className="breadcrumbs">breadcrumbs</div>

      <div className="header-logo">
        {/* I should probably add a default width */}
        <Link to="/" rel="home" aria-label="riley bathurst design home"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.36 150.54" className="header-logo"><path d="M45.87 82.26l.74.89 24.75 30.14-4.21 11.06-23.9 3.86 17.27 21.2a54.16 54.16 0 0 0 9.14-2.56h-.25l20.06-53.28-20.12-24.39q12-6.92 18.25-15t6.22-21.16q0-14.44-10.37-23.72a37.58 37.58 0 0 0-3.08-2.45L68.63 37.72 45.06 29.1 56.15.04Q39.47.31 28.87 9.09q-11 9.02-11 25.14a36.57 36.57 0 0 0 3.5 15.61 61.17 61.17 0 0 0 9.9 14.72l-3.1 1.9q-15 9.3-21.6 18.79a35.57 35.57 0 0 0-2.21 3.71zm-1.11-52.25l23.43 8.62a17 17 0 0 1-8.54 8.27 54.18 54.18 0 0 1-10.78 3.54 125.52 125.52 0 0 1-4-12.48 16.25 16.25 0 0 1-.16-7.95z" /><path d="M13.71 138.31l19.78-52-30.17 4.87A41.57 41.57 0 0 0 0 108.08q0 16.1 12.73 29.3c.32.3.65.61.98.93zm98.93-67.68l-24.08 63.75h.06l-4.75 12.47h10.67l28.66-76.22zm-6.31 76.21h27.04l-18.64-22.26-8.4 22.26zM26.35 110.7L15.3 139.77q12.36 10.77 32.8 10.78a67.37 67.37 0 0 0 10.12-.75z" /></svg>
        </Link>
      </div>

      {/* <?php get_template_part( 'template-parts/header/feature-image' ); ?> */}
      <div className="header-color-blocking">{/* stay gold */}</div>
      <div className="custom-header-media overlaying-image">
        <div className="hero gp-top">

        </div> {/* .hero .gp-top */}
      </div> {/* .custom-header-media overlaying image */}

      <nav className="navigation-top">
        {/* <?php wp_nav_menu( array(
          'theme_location' => 'primary',
          'menu_id'        => 'top-menu',
        ) ); ?> */}
        <PrimaryMenu />
      </nav>

      {/* this isnt working currently */}
      <div className="spine">{/* {SiteDescription} */}</div>

    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  // SiteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  // SiteDescription: ``,
}

export default Header
