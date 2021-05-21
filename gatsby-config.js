module.exports = {
  siteMetadata: {
    title: "profile",
  },
  plugins: ["gatsby-plugin-gatsby-cloud"],
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Kumbh Sans`
        ],
        display: 'swap'
      }
    }
  ],
};
