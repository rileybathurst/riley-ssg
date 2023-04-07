require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    "blog",
    "tag",
    'styleguides',
    'image-grab',
    `project`,
    `trade`,
  ],
  singleTypes: [],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://rileybathurst.com/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

module.exports = {
  siteMetadata: {
    title: `Riley Bathurst`,
    description: `Pushing pixels since 2009`,
    author: `@rileybathurst`,
    siteUrl: `https://rileybathurst.com`,
    testingUrl: `https://rileybathurst.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        // icon: `🧑‍💻`, // TODO you can do this through the seo.tsx file but not here
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    `gatsby-plugin-sass`,



    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // TODO: this is the next thing to figure out
    // TODO: this has the testing URL
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                testingUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiBlog } }) => {
              return allStrapiBlog.nodes.map(blog => {
                return Object.assign({}, blog, {
                  title: blog.title,
                  description: blog.excerpt,
                  date: blog.createdAt,
                  url: site.siteMetadata.testingUrl + '/blog/' + blog.slug,
                  guid: site.siteMetadata.testingUrl + '/blog/' + blog.slug
                })
              })
            },
            query: `
            {
              allStrapiBlog(sort: {publishedAt: DESC}) {
                nodes {
                  title
                  excerpt
                  slug
                  createdAt
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Riley Bathurst's RSS Feed",
          },
        ], // feeds
      }, // options
    }, // resolve





  ],
}
