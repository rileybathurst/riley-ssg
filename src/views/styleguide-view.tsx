import * as React from "react";
import { Link } from "gatsby";

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

const StyleguideView = ({ styleguide }) => {
  return (
    <>
      <Header />
      <div className="spine-border">{/* stay gold */}</div>

      {/* // TODO: the nesting here is a mess build it out as a storyboard */}
      <article>
        <div className="article-content">
          <h1>{styleguide.name}</h1>
          <Markdown article={styleguide.guide.data} />
        </div>
      </article>
      <Footer />
    </>
  );
};

export default StyleguideView;
