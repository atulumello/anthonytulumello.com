/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteData = {
  url: "www.changeme.com", // No trailing slash allowed!
}

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
              `gatsby-plugin-react-helmet`,
            `gatsby-plugin-robots-txt`],
  
  siteMetadata: {
    title: "Anthony Tulumello",
    titleTemplate: "%s · Front-End Developer",
    description:
      "Front-End Developer located in Ontario, seeking employment doing what he loves the most.. coding and drinking coffee &#128579;",
    url: siteData.url, 
    image: "/images/icon.jpg", // Path to your image you placed in the 'static' folder
  },
}
