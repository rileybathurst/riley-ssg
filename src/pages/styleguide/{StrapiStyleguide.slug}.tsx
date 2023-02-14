import * as React from "react"
import { graphql } from "gatsby"

import StyleguideView from "../../views/styleguide-view"

export const query = graphql`
  query StyleguideQuery($slug: String!) {
    strapiStyleguide(slug: { eq: $slug }) {
      id
      name
      guide {
        data
      }
    }
  }
`

const StyleguidesPage = ({ data }) => {
  const styleguide = data.strapiStyleguide;
  return (
    <StyleguideView
      styleguide={styleguide}
    />
  );
};

export default StyleguidesPage;
