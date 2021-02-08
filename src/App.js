import React from "react"
import { StatusBar } from "react-native"
import { ApolloProvider } from "@apollo/client"

import client from "~/apollo"
import Routes from "~/Routes"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ApolloProvider>
  )
}

export default App
