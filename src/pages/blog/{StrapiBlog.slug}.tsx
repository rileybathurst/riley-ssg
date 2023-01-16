import * as React from "react"
import { graphql } from "gatsby"

import BlogView from "../../views/blog-view"

export const query = graphql`
  query BlogsQuery($slug: String!) {
    strapiBlog(slug: { eq: $slug }) {
      id
      title
      article {
        data {
          article
        }
      }
    }
  }
`

const BlogsPage = ({ data }) => {
  const blog = data.strapiBlog;
  return (
    <BlogView
      blog={blog}
    />
  );
};

export default BlogsPage;
