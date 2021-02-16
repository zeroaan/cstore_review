import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Signup = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Signup</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default Signup
