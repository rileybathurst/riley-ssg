// https://www.gatsbyjs.com/docs/adding-pagination/
// https://github.com/NickyMeuleman/gatsby-paginated-blog/blob/master/src/templates/blog-list.js

import React from 'react';
import { Link, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/creating-and-modifying-pages/#trade-offs-of-querying-for-all-fields-in-the-context-object-of-gatsby-nodejs
const BlogTemplate = ({ data, pageContext }) => {

  // console.log(this); // undefined
  // console.log(this.props); // fails
  // console.log(data);
  // console.log(pageContext);

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  // this has to do some stuff to make page 2 link back to page nothing
  const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  // console.log(currentPage); // test

  return (
    <>
      <h1>Blog</h1>
      {/* <p>{pageContext.currentPage}</p> */}
      <hr />
      <ol>{/* kinda interesting to do ol but it needs to skip numbers with the math */}
        {
          data.allStrapiBlog.edges.map(blog => (
            <li
              key={blog.node.id}
            // className=""
            >
              {/* <Link to={`/blog/${blog.node.slug}`}> */}
              <h2>
                {blog.node.title}
              </h2>
              {/* <When published={blog.node.publishedAt} updated={blog.node.updatedAt} /> */}
              {/* </Link> */}
            </li>
          ))
        }
      </ol>









      {/* {prevPage}{nextPage} */}
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
      edges{
        node {
          id
          title
        }
      }
    }
  }
`;
