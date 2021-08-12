require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Keller Strings",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_API,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
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
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ["Price"],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: false,
    //   },
    // },
  ],
};
