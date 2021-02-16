import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const Login = () => {
  const history = useHistory()
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

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
        <Icon
          style={styles.closeIcon}
          name="close"
          color="rgb(0,0,0)"
          size={30}
          onPress={() => history.goBack()}
        />
        <Text style={styles.loginText}>
          <Text style={styles.loginTextBold}>편</Text>의점{" "}
          <Text style={styles.loginTextBold}>리</Text>뷰
        </Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            value={inputEmail}
            onChangeText={(v) => setInputEmail(v)}
            placeholder="이메일 입력"
            returnKeyType="next"
            autoCapitalize="none"
            maxLength={30}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            value={inputPassword}
            onChangeText={(v) => setInputPassword(v)}
            placeholder="비밀번호 입력"
            autoCapitalize="none"
            maxLength={30}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signupBt}
            activeOpacity={0.7}
            onPress={() => history.push("/signup")}>
            <Text style={styles.signupBtText}>회원가입</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginBt}
            activeOpacity={0.7}
            onPress={() => history.push("/")}>
            <Text style={styles.loginBtText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
  },

  closeIcon: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  loginText: {
    fontFamily: "DoHyeon",
    fontSize: 30,
    color: "rgb(50, 50, 50)",
    marginBottom: 20,
  },
  loginTextBold: {
    fontWeight: "bold",
    color: "rgb(0, 175, 175)",
  },

  textInputContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 8,
  },
  loginTextInput: {
    flex: 1,
    height: 40,
    borderColor: "rgb(215, 215, 215)",
    borderWidth: 1,
    paddingHorizontal: 16,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signupBt: {
    flex: 1,
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
    borderColor: "rgb(0, 175, 175)",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 10,
  },
  signupBtText: {
    fontSize: 16,
    color: "rgb(0 , 175, 175)",
  },
  loginBt: {
    flex: 1,
    height: 40,
    backgroundColor: "rgb(0, 175, 175)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 20,
  },
  loginBtText: {
    fontSize: 16,
    color: "rgb(255,255,255)",
  },
})

export default Login
