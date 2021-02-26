import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useHistory } from "react-router-native"

const BeforeLogin = () => {
  const history = useHistory()

  return (
    <View style={styles.beforeLoginContainer}>
      <Text style={styles.beforeLogin}>로그인 후 이용하세요</Text>
      <TouchableOpacity
        style={styles.beforeLoginBt}
        activeOpacity={0.7}
        onPress={() => history.push("/login")}>
        <Text style={styles.beforeLoginBtText}>로그인</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  beforeLoginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
  },
  beforeLogin: {
    marginVertical: 40,
    fontSize: 18,
  },
  beforeLoginBt: {
    width: 200,
    height: 40,
    backgroundColor: "rgb(0, 175, 175)",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  beforeLoginBtText: {
    fontSize: 16,
    color: "rgb(255,255,255)",
  },
})

export default BeforeLogin
