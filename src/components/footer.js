import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import PrimaryMenu from "./primarymenu"

const Footer = ({ siteTitle }) => (
  <footer className="site-footer">

    <hr className="mega-hr-dirty reading-width" />

    <h3 className="site-footer--browse">Browse projects by category</h3>
    {/*     <nav className="menu">
      <PrimaryMenu />
    </nav> */}

    <div className="background-dirty footer-background__step">
      <div className="footer_info">
        <div className="footer_1">{/* stay gold */}</div>

        <div className="footer_copyright">
          <p>&copy; <Link to="/" rel="home">{siteTitle}</Link> 2009<span id="InTheYear"> - date("Y")</span></p>
          {/* Find how to deal with the current year in js im getting its an innerHTML */}
        </div>{/* .footer_copyright */}

        <div className="footer_nav">
          {/* <?php wp_nav_menu( array(
                'theme_location' => 'secondary',
                'menu_id'        => 'bottom-menu',
              ) ); ?> */}
          <nav id="bottom-menu" className="menu reading-width">{/* this might be able to be the top level now */}
            <ul>
              {/* <li><Link to='/search'>Search</Link></li> I need to learn a gatsby / ssg search function */}
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              {/* I can do something more interesting with this as a show whats available maybe an accordian or work in with what I already have */}
              <li><Link to='/social'>Social</Link></li>
              <li><Link to='/now'>Now</Link></li>
            </ul>
          </nav>
        </div> {/* .footer_nav */}

        <address className="footer_contact">
          {/* add some more details to this ie subject */}
          <a href="mailto:riley@rileybathurst.com">riley@rileybathurst.com</a>
          <a href="tel:5303866296">(530) 386-6296</a>
        </address>

        <div className="footer_5">{/* stay gold */}</div>
      </div>{/* footer_info */}
    </div>{/* .background-dirty footer-background__step */}

    <div className="background-primary background-primary__social-icons">
      {/* <div className="fp-box ccc-west"></div> I had this removed in wp? */}

      <div className="social-icons">
        <div className="fp-box">
          <a href="https://www.instagram.com/rileybathurst/">
            <svg id="icon-instagram" viewBox="0 0 28 32">
              <path className="path1" d="M18.286 16q0-1.893-1.339-3.232t-3.232-1.339-3.232 1.339-1.339 3.232 1.339 3.232 3.232 1.339 3.232-1.339 1.339-3.232zM20.75 16q0 2.929-2.054 4.982t-4.982 2.054-4.982-2.054-2.054-4.982 2.054-4.982 4.982-2.054 4.982 2.054 2.054 4.982zM22.679 8.679q0 0.679-0.482 1.161t-1.161 0.482-1.161-0.482-0.482-1.161 0.482-1.161 1.161-0.482 1.161 0.482 0.482 1.161zM13.714 4.75q-0.125 0-1.366-0.009t-1.884 0-1.723 0.054-1.839 0.179-1.277 0.33q-0.893 0.357-1.571 1.036t-1.036 1.571q-0.196 0.518-0.33 1.277t-0.179 1.839-0.054 1.723 0 1.884 0.009 1.366-0.009 1.366 0 1.884 0.054 1.723 0.179 1.839 0.33 1.277q0.357 0.893 1.036 1.571t1.571 1.036q0.518 0.196 1.277 0.33t1.839 0.179 1.723 0.054 1.884 0 1.366-0.009 1.366 0.009 1.884 0 1.723-0.054 1.839-0.179 1.277-0.33q0.893-0.357 1.571-1.036t1.036-1.571q0.196-0.518 0.33-1.277t0.179-1.839 0.054-1.723 0-1.884-0.009-1.366 0.009-1.366 0-1.884-0.054-1.723-0.179-1.839-0.33-1.277q-0.357-0.893-1.036-1.571t-1.571-1.036q-0.518-0.196-1.277-0.33t-1.839-0.179-1.723-0.054-1.884 0-1.366 0.009zM27.429 16q0 4.089-0.089 5.661-0.179 3.714-2.214 5.75t-5.75 2.214q-1.571 0.089-5.661 0.089t-5.661-0.089q-3.714-0.179-5.75-2.214t-2.214-5.75q-0.089-1.571-0.089-5.661t0.089-5.661q0.179-3.714 2.214-5.75t5.75-2.214q1.571-0.089 5.661-0.089t5.661 0.089q3.714 0.179 5.75 2.214t2.214 5.75q0.089 1.571 0.089 5.661z"></path>
            </svg>
          </a>
        </div>
        <div className="fp-box">
          <a href="https://www.linkedin.com/in/rileybathurst/">
            <svg id="icon-linkedin" viewBox="0 0 28 32">
              <path className="path1" d="M6.232 11.161v17.696h-5.893v-17.696h5.893zM6.607 5.696q0.018 1.304-0.902 2.179t-2.42 0.875h-0.036q-1.464 0-2.357-0.875t-0.893-2.179q0-1.321 0.92-2.188t2.402-0.866 2.375 0.866 0.911 2.188zM27.429 18.714v10.143h-5.875v-9.464q0-1.875-0.723-2.938t-2.259-1.063q-1.125 0-1.884 0.616t-1.134 1.527q-0.196 0.536-0.196 1.446v9.875h-5.875q0.036-7.125 0.036-11.554t-0.018-5.286l-0.018-0.857h5.875v2.571h-0.036q0.357-0.571 0.732-1t1.009-0.929 1.554-0.777 2.045-0.277q3.054 0 4.911 2.027t1.857 5.938z"></path>
            </svg>
          </a>
        </div>
        <div className="fp-box">
          <a href="https://github.com/rileybathurst">
            <svg id="icon-github" viewBox="0 0 28 32">
              <path className="path1" d="M13.714 2.286q3.732 0 6.884 1.839t4.991 4.991 1.839 6.884q0 4.482-2.616 8.063t-6.759 4.955q-0.482 0.089-0.714-0.125t-0.232-0.536q0-0.054 0.009-1.366t0.009-2.402q0-1.732-0.929-2.536 1.018-0.107 1.83-0.321t1.679-0.696 1.446-1.188 0.946-1.875 0.366-2.688q0-2.125-1.411-3.679 0.661-1.625-0.143-3.643-0.5-0.161-1.446 0.196t-1.643 0.786l-0.679 0.429q-1.661-0.464-3.429-0.464t-3.429 0.464q-0.286-0.196-0.759-0.482t-1.491-0.688-1.518-0.241q-0.804 2.018-0.143 3.643-1.411 1.554-1.411 3.679 0 1.518 0.366 2.679t0.938 1.875 1.438 1.196 1.679 0.696 1.83 0.321q-0.696 0.643-0.875 1.839-0.375 0.179-0.804 0.268t-1.018 0.089-1.17-0.384-0.991-1.116q-0.339-0.571-0.866-0.929t-0.884-0.429l-0.357-0.054q-0.375 0-0.518 0.080t-0.089 0.205 0.161 0.25 0.232 0.214l0.125 0.089q0.393 0.179 0.777 0.679t0.563 0.911l0.179 0.411q0.232 0.679 0.786 1.098t1.196 0.536 1.241 0.125 0.991-0.063l0.411-0.071q0 0.679 0.009 1.58t0.009 0.973q0 0.321-0.232 0.536t-0.714 0.125q-4.143-1.375-6.759-4.955t-2.616-8.063q0-3.732 1.839-6.884t4.991-4.991 6.884-1.839zM5.196 21.982q0.054-0.125-0.125-0.214-0.179-0.054-0.232 0.036-0.054 0.125 0.125 0.214 0.161 0.107 0.232-0.036zM5.75 22.589q0.125-0.089-0.036-0.286-0.179-0.161-0.286-0.054-0.125 0.089 0.036 0.286 0.179 0.179 0.286 0.054zM6.286 23.393q0.161-0.125 0-0.339-0.143-0.232-0.304-0.107-0.161 0.089 0 0.321t0.304 0.125zM7.036 24.143q0.143-0.143-0.071-0.339-0.214-0.214-0.357-0.054-0.161 0.143 0.071 0.339 0.214 0.214 0.357 0.054zM8.054 24.589q0.054-0.196-0.232-0.286-0.268-0.071-0.339 0.125t0.232 0.268q0.268 0.107 0.339-0.107zM9.179 24.679q0-0.232-0.304-0.196-0.286 0-0.286 0.196 0 0.232 0.304 0.196 0.286 0 0.286-0.196zM10.214 24.5q-0.036-0.196-0.321-0.161-0.286 0.054-0.25 0.268t0.321 0.143 0.25-0.25z"></path>
            </svg>
          </a>
        </div> {/* .fp-box */}
      </div> {/* .social-icons */}

      {/* <div className="fp-box ccc-east"></div> this had been removed in wp */}

    </div> {/* .background-primary background-primary__social-icons */}

    {/* I dont think I need to close the html and body tags as I dont open them */}
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  // SiteDescription: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  // SiteDescription: ``,
}

export default Footer
