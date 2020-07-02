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
    title: "SGBBP",
    titleTemplate: "%s · Build Faster",
    description:
      "I describe the project",
    url: siteData.url, 
    image: "/images/icon.jpg", // Path to your image you placed in the 'static' folder
  },
}
