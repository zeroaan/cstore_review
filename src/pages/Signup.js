import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import LayoutGoBack from "~/components/LayoutGoBack"
import SignupInput from "~/components/Signup/SignupInput"

const Signup = () => {
  const history = useHistory()

  return (
    <LayoutGoBack>
      <View style={styles.topContainer}>
        <Icon
          style={styles.closeIcon}
          name="arrow-back-ios"
          color="rgb(0,0,0)"
          size={25}
          onPress={() => history.goBack()}
        />
        <Text style={styles.topText}>회원가입</Text>
      </View>

      <SignupInput />
    </LayoutGoBack>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    backgroundColor: "rgb(255,255,255)",
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeIcon: {
    position: "absolute",
    top: 16,
    left: 16,
  },
})

export default Signup
