// https://www.gatsbyjs.com/docs/adding-pagination/
// https://github.com/NickyMeuleman/gatsby-paginated-blog/blob/master/src/templates/blog-list.js

import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';

// https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#trade-offs-of-querying-for-all-fields-in-the-context-object-of-gatsby-nodejs
const BlogTemplate = ({ data, pageContext }) => {

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <>
      <Header />
      <h1>Blog</h1>
      <hr />
      <ol>
        {
          data.allStrapiBlog.nodes.map(blog => (
            <li
              key={blog.id}
            >
              <Link to={`/blog/${blog.slug}`}>
                <h2>
                  {blog.title}
                </h2>
                {/* <When published={blog.node.publishedAt} updated={blog.node.updatedAt} /> */}
              </Link>
            </li>
          ))
        }
      </ol>

      <hr />

      <h3>pagination starts here</h3>
      <ul>
        {!isFirst && (
          <Link to={`/blog/${prevPage}`} rel="prev">
            ← Previous Page
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li
            key={`pagination-number${i + 1}`}
          >
            <Link
              to={`/blog/${i === 0 ? '' : i + 1}`}
              // class === true for the current page
              // false for all other pages
              className={`${i + 1 === currentPage}`}>
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <Link to={`/blog/${nextPage}`} rel="next">
            Next Page →
          </Link>
        )}
      </ul>

      <Footer />
    </>
  );
};

export default BlogTemplate;

export const query = graphql`
  query(
    $limit: Int!
    $skip: Int!
  ) {
    allStrapiBlog(
      sort: {updatedAt: DESC},
      limit: $limit,
      skip: $skip
    ) {
      nodes {
        id
        title
        slug
        publishedAt
        updatedAt
      }
    }
  }
`;
