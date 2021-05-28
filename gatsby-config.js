module.exports = {

  siteMetadata: {
    title: "profile",
  },

  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,

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
          `Kumbh Sans\:300,400,700`
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

    {
  			resolve: 'gatsby-transformer-remark',
  			options: {
  				plugins: [
  					{
  						resolve: 'gatsby-remark-images',
  						options: {
  							maxWidth: 1200,
  						},
  					},
  				],
  			},
  		},
  ],

};
