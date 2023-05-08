import * as React from "react";
import { Link, graphql } from "gatsby";

// ? why did I use showdown instead of what I normally use. Check the style guide
import showdown from "showdown";

import Header from "../components/header";
import Footer from "../components/footer";

function Markdown(props) {
  var converter = new showdown.Converter(),
    text = props.article,
    html = converter.makeHtml(text);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

// ! test
function Console(props) {
  console.log(props.log);
  return null;
}

// * Theres a bug the first is returning the first again
function Previous(props) {
  if (props.node.slug !== props.previous.slug) {
    return (
      <div className="blog-nav-previous">
        <Link to={`/blog/${props.previous.slug}`}>
          Previous <span>{props.previous.title}</span>
        </Link>
      </div>
    )
  } else {
    return null;
  }
}

// function

const BlogView = ({ data }) => {
  return (
    <>

      <Console log={data} />
      <Console log={data.next} />

      <Header />
      <div className="spine-border">{/* stay gold */}</div>

      {/* // TODO: the nesting here is a mess build it out as a storyboard */}
      <article>
        <div className="article-content">
          <h1>{data.node.title}</h1>
          {/* <Markdown article={blog.article.data.article} /> */}
        </div>
      </article>

      <hr />

      <section className="blog-nav">

        <Previous node={data.node} previous={data.previous} />
        <hr />

        <div className="blog-nav-previous">
          <Link to={`/blog/${data?.next?.slug}`}>
            Next <span>{data?.next?.title}</span>
          </Link>
        </div>
      </section>
      <hr />

      {/* // TODO: Breadcrumbs styling put it up on the side */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol>
          <li>
            <Link to="/blog/">
              / Blog /
            </Link>
          </li>
          <li aria-current="page">
            {data.node.title}
          </li>
        </ol>
      </nav>

      <hr />

      <Footer />
    </>
  );
};

export default BlogView;


export const query = graphql`
  query (
    $slug: String!,
    $next: String,
    $previous: String
  ) {
  
    node:strapiBlog(slug: {eq: $slug}) {
      title
      slug
    }

    next:strapiBlog(slug: {eq: $next}) {
      title
      slug
    }

    previous:strapiBlog(slug: {eq: $previous}) {
      title
      slug
    }
  }
`