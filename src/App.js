import React from "react"
import { StyleSheet, View, Text, StatusBar } from "react-native"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
