/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteData = {
  url: "www.anthonytulumello.com", // No trailing slash allowed!
}

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
              `gatsby-plugin-react-helmet`],
  
  siteMetadata: {
    title: "Anthony Tulumello",
    titleTemplate: "%s · Front-End Developer",
    description:
      "A Canadian front-end focused web developer with a wide array of knowledge in different stacks, both front and back. &#128187;",
    url: siteData.url, 
    image: "/images/icon.jpg", // Path to your image you placed in the 'static' folder
  },
}
