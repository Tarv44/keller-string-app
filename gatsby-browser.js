import React from "react";
import { AlertProvider } from "./src/contexts/alertContext";
import "@fontsource/libre-franklin/700.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/500.css";
import "@fontsource/libre-franklin/400.css";
export const wrapRootElement = ({ element }) => (
  <AlertProvider>{element}</AlertProvider>
)