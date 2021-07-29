import React from "react"
import { ScreenProvider } from "./src/contexts/screenContext"
export const wrapRootElement = ({ element }) => (
  <ScreenProvider>{element}</ScreenProvider>
)