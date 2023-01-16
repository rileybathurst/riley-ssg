import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const BlogView = ({ blog }) => {
  return (
    <Layout>
      <main>
        <h1>{blog.title}</h1>
        {blog.article.data.article}
      </main>
    </Layout>
  );
};

export default BlogView;
