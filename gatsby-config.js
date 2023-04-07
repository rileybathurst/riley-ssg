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
              return allStrapiBlog.edges.map(blog => {
                return Object.assign({}, blog.node, {
                  title: blog.node.title,
                  // description: blog.node.article.data.article,
                  date: blog.node.createdAt,
                  url: site.siteMetadata.testingUrl + '/blog/' + blog.node.slug,
                  guid: site.siteMetadata.testingUrl + '/blog/' + blog.node.slug,
                  custom_elements: [
                    {
                      "content:encoded": blog.node.article.data.article

                        // https://javascript.plainenglish.io/simple-markdown-parser-with-javascript-and-regular-expressions-f0c8d53449a4
                        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
                        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
                        .replace(/\*(.*)\*/gim, '<i>$1</i>')
                        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
                        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
                        .replace(/\n$/gim, '<br />')
                    },

                  ],
                })
              })
            },
            query: `
            {
              allStrapiBlog(sort: {publishedAt: DESC}) {
                edges {
                  node {
                    title
                    slug
                    createdAt
                    article {
                      data {
                        article
                      }
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Riley Bathurst's RSS Feed",
          },
        ],
      },
    },
  ],
}
