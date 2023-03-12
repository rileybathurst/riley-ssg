import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import SpineBorder from "../components/spine-border"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query IndexQuery {
      allStrapiProject {
        nodes {
          id
          title
          excerpt
          slug
          start(formatString: "MM YYYY")
          finish(formatString: "MM YYYY")

          hero {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }

          trades {
            id
            name
          }
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

      <div className="">
        <h2 className="passage" >Featured Projects</h2>
        {list.map((project) => (
          <div
            key={project.id}
            className="slab"
          >
            <article>
              <h2>
                <Link to={project.slug}>
                  {project.title}
                </Link>
              </h2>

              <div className="color-blocking">{/* stay gold*/}</div>

              <GatsbyImage
                image={project.hero.localFile.childImageSharp.gatsbyImageData}
                alt={project.hero.alternativeText}
                className="hero"
              />

              <p className="excerpt">
                {project.excerpt}
              </p>

              {/* // TODO: if then put in what its features but only above heights // probably if it has an image */}
              <aside className="trades">
                {project.trades.map((trade) => (
                  <div key={trade.id}>
                    <Link to={`/trades/${trade.slug}`}>
                      {trade.name}
                    </Link>
                  </div>
                ))}
              </aside>

              <aside className="dates">
                {/* // TODO: date formating as words */}
                {project.start} - {project.finish}
              </aside>

              <h3 className="explore">
                <Link to={project.slug}>Explore {project.title}</Link>
              </h3>
            </article>
          </div>
        ))}
      </div>

      <div className="passage">
        {hasMore ? (
          <button onClick={handleLoadMore} className=''>View more projects</button>
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
