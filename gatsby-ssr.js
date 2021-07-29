const React = require('react');
const { ScreenProvider } = require("./src/contexts/screenContext")
exports.wrapRootElement = ({ element }) => (
  <ScreenProvider>{element}</ScreenProvider>
)