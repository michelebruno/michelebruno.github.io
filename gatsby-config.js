require('dotenv').config()

const siteUrl = 'https://michelebruno.github.io'

const description = 'Hello, I\'m Michele, a creative developer and UX designer.'

module.exports = {
    siteMetadata: {
        title: 'Michele Bruno | UX Designer & Creative Developer',
        titleTemplate: '%s - Michele Bruno',
        description,
        siteUrl, // No trailing slash allowed!
        image: '/ident-bumper.jpg', // Path to your image you placed in the 'static' folder
     },
    plugins: [
        "gatsby-plugin-image",
        'gatsby-plugin-postcss',
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "G-VJFWWE663B",
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                typekit: {
                    id: process.env.TYPEKIT_ID,
                },
            },
        },
        'gatsby-plugin-svgr',
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "mdx",
                path: "./src/mdx/",
            },
            __key: "mdx",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
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
