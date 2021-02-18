import React, { useState, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"
import { useHistory } from "react-router-native"
import { useDispatch } from "react-redux"
import { gql, useLazyQuery } from "@apollo/client"
import Icon from "react-native-vector-icons/MaterialIcons"

import { login } from "~/store/actions/user"

import LayoutGoBack from "~/components/LayoutGoBack"

const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      username
      email
      myliked
      myreview
    }
  }
`

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const pwRef = useRef(null)

  const [loginQuery, { data }] = useLazyQuery(LOGIN, {
    variables: { email: inputEmail, password: inputPassword },
  })

  const onPressLoginBt = () => {
    loginQuery()
    if (data) {
      dispatch(login(data.login))
      history.push("/")
    }
  }

  return (
    <LayoutGoBack>
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
            onSubmitEditing={() => pwRef?.current?.focus()}
            placeholder="이메일 입력"
            returnKeyType="next"
            autoCapitalize="none"
            maxLength={30}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={pwRef}
            style={styles.loginTextInput}
            value={inputPassword}
            onChangeText={(v) => setInputPassword(v)}
            placeholder="비밀번호 입력"
            autoCapitalize="none"
            maxLength={30}
            secureTextEntry={true}
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
            onPress={onPressLoginBt}>
            <Text style={styles.loginBtText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutGoBack>
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
    fontSize: 40,
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
    height: 50,
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
    height: 50,
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
    fontSize: 18,
    color: "rgb(0 , 175, 175)",
  },
  loginBt: {
    flex: 1,
    height: 50,
    backgroundColor: "rgb(0, 175, 175)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 20,
  },
  loginBtText: {
    fontSize: 18,
    color: "rgb(255,255,255)",
  },
})

export default Login
