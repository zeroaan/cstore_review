import React from "react"
import { View, Text, StyleSheet } from "react-native"

import Layout from "~/components/Layout"

const Login = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Login
