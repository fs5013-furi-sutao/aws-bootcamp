module.exports = {
  pathPrefix: `/aws-bootcamp`,
  siteMetadata: {
    siteTitle: `AWS Bootcamp`,
    defaultTitle: `AWS Bootcamp`,
    siteTitleShort: `AWS Bootcamp`,
    siteDescription: `65 時間で AWS の入門的な知識を手に入れる フリースタイル研修生用のプログラム`,
    siteUrl: `https://fs5013-furi-sutao.github.io/aws-bootcamp/`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `ja`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/fs5013-furi-sutao/aws-bootcamp`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fs5013-furi-sutao.github.io/aws-bootcamp/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
