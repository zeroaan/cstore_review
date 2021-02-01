import React from "react"
import { StatusBar } from "react-native"

import Router from "~/Router"

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Router />
    </>
  )
}

export default App
