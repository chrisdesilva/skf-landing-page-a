module.exports = {
  siteMetadata: {
    title: `Skills Fund`,
    description: `Skills Fund finances students to attend the best coding and data science programs around. We believe in 100% loan transparency, and have aligned all incentives around student success.`,
    headline: `Partner financing page for Skills Fund and SCHOOLNAME`,
    author: `@Skills_Fund`,
    siteLanguage: `en`,
    logo: `src/images/skillsFund_logo.png`,
    favicon: `src/images/Favicon-SF.png`,
    keywords: `coding loans, bootcamp loans, tuition loan, tuition financing, coding, web development, UX design, UI design coding bootcamp, bootcamp, full-time, part-time, student financing, student loans, loans, cosigner, underwriting, credit, credit score`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-zopfli'
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-68312423-1"
        ],
        gtagConfig: {
          cookie_domain: "auto"
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/Favicon-SF.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

