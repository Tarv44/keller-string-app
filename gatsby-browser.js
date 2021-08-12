import React from "react";
import ReactDOM from 'react-dom';
import { AlertProvider } from "./src/contexts/alertContext";
import "@fontsource/libre-franklin/700.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/500.css";
import "@fontsource/libre-franklin/400.css";
import {loadableReady} from "@loadable/component"
export const wrapRootElement = ({ element }) => (
  <AlertProvider>{element}</AlertProvider>
)



export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    loadableReady(() => {
      ReactDOM.render(element, container, callback)
    })
  }
}