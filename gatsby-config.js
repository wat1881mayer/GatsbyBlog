/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Simply Recipes',
    description:"Nice and clean recipws site",
    author:"@inabawat",
    person:{name:"wat",age:24},
    simpleData:['item 1','item 2'],
    complexData:[
    { name:"wat", age: 25},
    { name:"susan", age: 21},
    ],
  },
  plugins: [`gatsby-plugin-styled-components`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `xto88gr0uya9`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_API_KEY,
    },
  },
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Montserrat",
            variants: ["400"],
            //subsets: ['latin']
            //text: 'Hello'
            //fontDisplay: 'swap',
            //strategy: 'selfHosted' // 'base64' || 'cdn'
          },
          {
            family: "Inconsolata",
            variants: ["300","400","600","700"],
          },
        ],
      },
    },
  },
  `gatsby-plugin-react-helmet`,
],
}