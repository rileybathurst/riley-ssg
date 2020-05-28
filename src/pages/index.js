import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Image /> */}
      <div class="background-primary">
        <div class="front-page-titles">
          <div class="fp-box clicks-a"><div class="ghostly presence">C</div></div>
          <div class="fp-box clicks-b"><div class="ghostly presence">L</div></div>
          <div class="fp-box clicks-c"><div class="ghostly presence">I</div></div>
          <div class="fp-box clicks-d"><div class="ghostly presence">C</div></div>
          <div class="fp-box clicks-e"><div class="ghostly presence">K</div></div>
          <div class="fp-box clicks-f"><div class="ghostly presence">S</div></div>

          <div class="fp-box code-a"><div class="ghostly presence">C</div></div>
          <div class="fp-box code-b"><div class="ghostly presence">O</div></div>
          <div class="fp-box code-c"><div class="ghostly presence">D</div></div>
          <div class="fp-box code-d"><div class="ghostly presence">E</div></div>
          <div class="fp-box code-e">&nbsp;</div>
          <div class="fp-box code-f" data-text="&amp;"><div class="ghostly presence">&amp;</div></div>

          <div class="fp-box camera-a"><div class="ghostly presence">C</div></div>
          <div class="fp-box camera-b"><div class="ghostly presence">A</div></div>
          <div class="fp-box camera-c"><div class="ghostly presence">M</div></div>
          <div class="fp-box camera-d"><div class="ghostly presence">E</div></div>
          <div class="fp-box camera-e"><div class="ghostly presence">R</div></div>
          <div class="fp-box camera-f"><div class="ghostly presence">A</div></div>
        </div>
      </div>

      {/* I wonder if I can drop a few levels of tags here */}
      <div class="background-dirty">
        <main class="site-main">

          <article> {/*  <?php post_class(); ?> */}

            <div class="spine-border">{/* stay gold */}</div>

            <div class="fp-header">
              <h2 class="page-title">I&rsquo;m A <span id="changeText">Designer</span></h2>
            </div>

            <div class="article-content">
              <p>Welcome to Riley Bathurst Design this is my freelance design, photography, and video space.</p>
              
              <p>I've been working with clients from large to small, creating logos to TV shows. I'm always up for a challenge and available to create something for you, your company, or your project. I ended up here through design school, working for photographers and a desire to create as projects have come up or I have been looking at new things I have adapted my work continually through medium and style, something I wish to keep doing to keep creating the best pieces I can.</p>

            </div>{/* .article-content */}

        </article>

    </main> {/* .site-main */}
  </div> {/* .background-dirty */}

  {/* <hr class="mega-hr-primary" /> */}

  <div class="background-dirty">
    <section class="site-main">
      <h2 class="featured-header">Featured Project</h2>
      <article class="">
        <figure class="article-thumbnail category-thumbnail category-overlaying-image">
          <Link to="/snowledge">
            <img src="/images/4frnt_snowledge_app_30_liquify-5-360x240.jpg" alt="skier as part of a design piece" />
          </Link>
        </figure>
      
      <Link to="/snowledge" class="category-color-blocking">
        <div>{/* stay gold */}</div>
      </Link>

      <div class="fp-header">
        <hr class="mega-hr" />
        <h2 class="page-title">
          <Link to="/snowledge">
            Snowledge
          </Link>
        </h2>
      </div>

      <div class="article-category">
        <hr class="mega-hr-primary hide-for-large" />
        <div class="category-container">
          <div class="subheading"><p>This Project contains</p>
            <ul>
              <li><Link to="/clicks">Clicks</Link></li>
              <li><Link to="/camera">Camera</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="article-speechbubble">
        <p><span class="speechbubble">Nov 2016 – Continuing</span></p>{/* Im guessing this was a wordpress reason this needs a span I can probably get rid of */}
      </div>

      <div class="featured--excerpt">
        <p>I’ve been working with Snowledge.co as the lead digital content creator. This is a relatively open position for creating media for advertising and social media. This ranges from disappearing stories on social media as a throw away up to full video projects that have taken weeks to months to complete.</p>

        <p>Being involved with a project in the startup phases I have also helped across the board with design on marketing and UI, with a social media base the app needs constant updates and a large amount of shots have flown through the app and out into other channels to promote the project.</p>
      </div>

      <div class="article-explore">
        <hr class="mega-hr-primary" />
        <Link to="/snowledge">Explore Snowledge</Link>
      </div>
    </article>

    </section>
  </div> {/* .background-dirty */}
  </Layout>
)

export default IndexPage
