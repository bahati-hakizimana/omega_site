import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const ViewPage = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
