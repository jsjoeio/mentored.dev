module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}
