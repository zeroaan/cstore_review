import React from "react"
import { StyleSheet, View, Text, StatusBar } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>편리</Text>
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
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    color: "rgb(0, 175, 175)",
    fontSize: 23,
  },
})

export default App
