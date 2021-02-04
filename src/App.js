import React from "react"
import { StatusBar } from "react-native"
import { ApolloProvider } from "@apollo/client"

import client from "~/apollo"
import Router from "~/Router"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <Router />
    </ApolloProvider>
  )
}

export default App
