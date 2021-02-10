import React from "react"
import { View, Text, StyleSheet } from "react-native"

import Layout from "~/components/Layout"

const Search = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Search</Text>
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

export default Search
