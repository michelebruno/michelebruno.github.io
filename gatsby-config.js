require('dotenv').config();

const siteUrl = 'https://michelebruno.github.io';

const description = "Hello, I'm Michele, a creative developer and UX designer.";

module.exports = {
  siteMetadata: {
    title: `${
      process.env.NODE_ENV !== 'production' ? '[DEV]' : ''
    }Michele Bruno | UX Designer & Creative Developer`,
    titleTemplate: `${process.env.NODE_ENV !== 'production' ? '[DEV]' : ''}%s - Michele Bruno`,
    description,
    siteUrl, // No trailing slash allowed!
    image: '/ident-bumper.jpg', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-VJFWWE663B',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google2: [
          {
            family: 'Manrope',
            axes: 'wght@400..600', // multiple ranges are supported, ex: "wght@300..500;700..900"
          },
        ],
        // typekit: {
        //     id: process.env.TYPEKIT_ID,
        // },
        // custom: {
        //     families: ["Switzer", "Cabinet Grotesk"],
        //     urls: ['https://api.fontshare.com/css?f[]=switzer@301,400&f[]=cabinet-grotesk@400,700&display=swap']
        // }
      },
    },
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx',
        path: './src/mdx/',
      },
      __key: 'mdx',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wlyz45dxguno`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
