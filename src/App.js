import React from "react"
import { StatusBar } from "react-native"
import { Provider } from "react-redux"
import { ApolloProvider } from "@apollo/client"

import store from "~/store"
import client from "~/apollo"
import Routes from "~/Routes"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Provider>
    </ApolloProvider>
  )
}

export default App
