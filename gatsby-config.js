require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    {
      resolve: `gatsby-plugin-use-shopping-cart`,
      options: {
        mode: "payment",
        cartMode: "client-only",
        stripePublicKey: process.env.STRIPE_PUBLISHABLE_KEY,
        successUrl: "https://www.google.com", // url must start with http or https
        cancelUrl: "https://www.stripe.com", // url must start with http or https
        currency: "USD",
        allowedCountries: ["US"],
        billingAddressCollection: true,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },

  ],
};
