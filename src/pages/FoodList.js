import React from "react"
import { View, Text, StyleSheet } from "react-native"

import Layout from "~/components/Layout"

const FoodList = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>FoodList</Text>
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

export default FoodList
