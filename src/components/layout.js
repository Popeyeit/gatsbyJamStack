import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
