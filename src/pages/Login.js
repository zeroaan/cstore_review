import React, { useEffect } from "react"
import { View, Text, StyleSheet, BackHandler } from "react-native"
import { useHistory } from "react-router-native"

const Login = () => {
  const history = useHistory()

  const backAction = () => {
    history.goBack()
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Text>Login</Text>
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

export default Login
