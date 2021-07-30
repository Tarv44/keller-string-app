const React = require('react');
const { AlertProvider } = require("./src/contexts/alertContext")
exports.wrapRootElement = ({ element }) => (
  <AlertProvider>{element}</AlertProvider>
)