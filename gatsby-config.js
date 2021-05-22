module.exports = {

  siteMetadata: {
    title: "profile",
  },

  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Kumbh Sans`
        ],
        display: 'swap'
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],

};
