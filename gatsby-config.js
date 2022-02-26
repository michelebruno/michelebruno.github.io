require('dotenv').config();

const siteUrl = 'https://michelebruno.github.io';

const description = "Hello, I'm Michele, a creative developer and UX designer.";

module.exports = {
  siteMetadata: {
    title: `${
      process.env.NODE_ENV !== 'production' ? '[DEV] ' : ''
    }Michele Bruno | UX Designer & Creative Developer`,
    titleTemplate: `${process.env.NODE_ENV !== 'production' ? '[DEV] ' : ''}%s - Michele Bruno`,
    description,
    siteUrl, // No trailing slash allowed!
    image: '/ident-bumper.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-VJFWWE663B'],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        // google2: [
        //   {
        //     family: 'Manrope',
        //     axes: 'wght@400..600', // multiple ranges are supported, ex: "wght@300..500;700..900"
        //   },
        // ],
        // typekit: {
        //     id: process.env.TYPEKIT_ID,
        // },
        custom: {
          families: ['Clash Grotesk', 'Gambetta'],
          urls: [
            'https://api.fontshare.com/css?f[]=clash-grotesk@300,400,600&f[]=gambetta@401&display=swap',
          ],
        },
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
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
  ],
};
