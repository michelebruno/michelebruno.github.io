require('dotenv').config()

module.exports = {
    siteMetadata: {
        siteUrl: "https://www.mbruno.it",
        title: "Michele Bruno",
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
                name: "data",
                path: "./src/data/",
            },
            __key: "data",
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
