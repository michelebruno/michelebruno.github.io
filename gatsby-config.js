require('dotenv').config();

const siteUrl = 'https://michelebruno.co';

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
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `bm386dig`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        //  graphqlTag: 'default',
      },
    },
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
        /* typekit: {
          id: process.env.TYPEKIT_ID,
        }, */
        custom: {
          families: ['Switzer'],
          urls: ['https://api.fontshare.com/v2/css?f[]=switzer@600,601,400,401&display=swap'],
        },
      },
    },
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-transition-link`,
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
