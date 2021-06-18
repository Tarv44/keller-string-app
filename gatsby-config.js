module.exports = {
  siteMetadata: {
    title: "Keller Strings",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "zTLIfTqSsGIGRAiy4SeJRFvzSLmfwYn7Md_dVI4q1iM",
        spaceId: "wicx2pdkkpsg",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
  ],
};
