import React from "react"
import { View, Text, StyleSheet } from "react-native"

import LayoutGoBack from "~/components/LayoutGoBack"

const Signup = () => {
  return (
    <LayoutGoBack>
      <View style={styles.container}>
        <Text>Signup</Text>
      </View>
    </LayoutGoBack>
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
