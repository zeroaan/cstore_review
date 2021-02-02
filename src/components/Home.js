import React from "react"
import { StyleSheet, View, Text } from "react-native"

const Home = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>편리</Text>
      </View>
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: "rgb(0, 175, 175)",
    fontSize: 30,
    fontFamily: "DoHyeon",
  },
})

export default Home
