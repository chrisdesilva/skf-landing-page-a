module.exports = {
	siteMetadata: {
		title: `Skills Fund | Fund Your Future`,
		description: `Skills Fund finances students to attend the best coding and data science programs around. We believe in 100% loan transparency, and have aligned all incentives around student success.`,
		keywords: `coding loans, bootcamp loans, tuition loan, tuition financing, coding, web development, UX design, UI design coding bootcamp, bootcamp, full-time, part-time, student financing, student loans, loans, cosigner, underwriting, credit, credit score`,
		author: `@desilvadev`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/Favicon-SF.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
