import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import SpineBorder from "../components/spine-border"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query IndexQuery {
      allStrapiProject {
        nodes {
          title
        }
      }
    }
  `)

  let allProjects = data.allStrapiProject.nodes

  // State for the list
  const [list, setList] = useState([...allProjects.slice(0, 2)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allProjects.length > 2)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allProjects.length
      const nextResults = isMore
        ? allProjects.slice(currentLength, currentLength + 2)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allProjects.length
    setHasMore(isMore)
  }, [list])

  return (
    <>
      <Header />
      <div className="background-primary">
        <div className="front-page-titles">
          <div className="fp-box">{/* stay gold */}</div>
          <div className="fp-box clicks-a"><div className="ghostly presence">C</div></div>
          <div className="fp-box clicks-b"><div className="ghostly presence">L</div></div>
          <div className="fp-box clicks-c"><div className="ghostly presence">I</div></div>
          <div className="fp-box clicks-d"><div className="ghostly presence">C</div></div>
          <div className="fp-box clicks-e"><div className="ghostly presence">K</div></div>
          <div className="fp-box clicks-f"><div className="ghostly presence">S</div></div>
          <div className="fp-box">{/* stay gold */}</div>

          <div className="fp-box">{/* stay gold */}</div>
          <div className="fp-box code-a"><div className="ghostly presence">C</div></div>
          <div className="fp-box code-b"><div className="ghostly presence">O</div></div>
          <div className="fp-box code-c"><div className="ghostly presence">D</div></div>
          <div className="fp-box code-d"><div className="ghostly presence">E</div></div>
          <div className="fp-box code-e">&nbsp;</div>
          <div className="fp-box code-f" data-text="&amp;"><div className="ghostly presence">&amp;</div></div>
          <div className="fp-box">{/* stay gold */}</div>

          <div className="fp-box">{/* stay gold */}</div>
          <div className="fp-box camera-a"><div className="ghostly presence">C</div></div>
          <div className="fp-box camera-b"><div className="ghostly presence">A</div></div>
          <div className="fp-box camera-c"><div className="ghostly presence">M</div></div>
          <div className="fp-box camera-d"><div className="ghostly presence">E</div></div>
          <div className="fp-box camera-e"><div className="ghostly presence">R</div></div>
          <div className="fp-box camera-f"><div className="ghostly presence">A</div></div>
          <div className="fp-box">{/* stay gold */}</div>
        </div>
      </div>

      {/* I wonder if I can drop a few levels of tags here */}
      <div className="background-dirty" >
        <main className="site-main">

          <article> {/*  <?php post_class(); ?> */}

            <SpineBorder />

            <div className="fp-header titleSpinner">
              <h2 className="page-title">I&rsquo;m A&nbsp;</h2>
              <div id="changeText">
                <h2 className="page-title">Designer</h2>
                <h2 className="page-title">Developer</h2>
                <h2 className="page-title">Photographer</h2>
              </div>
            </div>
            <div className="article-content">
              <p>Welcome to Riley Bathurst Design this is my freelance design, photography, and video space.</p>

              <p>I've been working with clients from large to small, creating logos to TV shows. I'm always up for a challenge and available to create something for you, your company, or your project. I ended up here through design school, working for photographers and a desire to create as projects have come up or I have been looking at new things I have adapted my work continually through medium and style, something I wish to keep doing to keep creating the best pieces I can.</p>

              <hr className="mega-hr-primary" />

              <p><Link to="clients">Clients</Link></p>

            </div>{/* .article-content */}

          </article>

        </main> {/* .site-main */}
      </div > {/* .background-dirty */}

      {/* <hr className="mega-hr-primary" /> */}

      <div className="background-dirty">
        <section className="site-main">
          <h2 className="featured-header">Featured Projects</h2>
          <article className="">
            <figure className="article-thumbnail category-thumbnail category-overlaying-image">
              <Link to="/snowledge">
                {/* <img src="/images/4frnt_snowledge_app_30_liquify-5-360x240.jpg" alt="skier as part of a design piece" /> */}

              </Link>
            </figure>

            <Link to="/snowledge" className="category-color-blocking">
              <div>{/* stay gold */}</div>
            </Link>

            <div className="fp-header">
              <hr className="mega-hr" />
              <h2 className="page-title">
                <Link to="/snowledge">
                  Snowledge
                </Link>
              </h2>
            </div>

            <div className="article-category">
              <hr className="mega-hr-primary hide-for-large" />
              <div className="category-container">
                <div className="subheading"><p>This Project contains</p>
                  <ul>
                    <li><Link to="/clicks">Clicks</Link></li>
                    <li><Link to="/camera">Camera</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="article-speechbubble">
              <p><span className="speechbubble">Nov 2016 – Continuing</span></p>{/* Im guessing this was a wordpress reason this needs a span I can probably get rid of */}
            </div>

            <div className="featured--excerpt">
              <p>I’ve been working with Snowledge.co as the lead digital content creator. This is a relatively open position for creating media for advertising and social media. This ranges from disappearing stories on social media as a throw away up to full video projects that have taken weeks to months to complete.</p>

              <p>Being involved with a project in the startup phases I have also helped across the board with design on marketing and UI, with a social media base the app needs constant updates and a large amount of shots have flown through the app and out into other channels to promote the project.</p>
            </div>

            <div className="article-explore">
              <hr className="mega-hr-primary" />
              <Link to="/snowledge">Explore Snowledge</Link>
            </div>
          </article>

        </section>
      </div>

      <div className="deck">
        {list.map((tour) => (
          <div
            // key={tour.id}
            className="card"
          >
            {tour.title}
          </div>
        ))}
      </div>

      <div className="deck__more">
        {hasMore ? (
          <button onClick={handleLoadMore} className=''>VIEW MORE TOURS &amp; LESSONS</button>
        ) : (
          <p>Thats all the projects</p>
        )}
        <hr />
      </div>







      <Footer />
    </>
  )
}

export default IndexPage
