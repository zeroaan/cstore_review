import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, ToastAndroid } from "react-native"
import { gql, useQuery } from "@apollo/client"

import CheckUser from "~/components/Signup/CheckUser"

const CHECK_EMAIL = gql`
  query checkEmail($email: String!) {
    checkEmail(email: $email)
  }
`
const CHECK_NAME = gql`
  query checkUsername($username: String!) {
    checkUsername(username: $username)
  }
`

const SignupInput = () => {
  const [inputEmail, setInputEmail] = useState("")
  const [inputName, setInputName] = useState("")
  const [inputPW, setInputPW] = useState("")
  const [inputRePW, setInputRePW] = useState("")

  const queryEmail = useQuery(CHECK_EMAIL, {
    variables: { email: inputEmail },
  })
  const queryName = useQuery(CHECK_NAME, {
    variables: { username: inputName },
  })

  const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
  }

  const onPressCheckEmail = () => {
    if (!inputEmail) return
    if (!inputEmail.includes("@")) {
      showToast("올바른 이메일 형식이 아닙니다")
      return
    }
    const { checkEmail } = queryEmail.data
    checkEmail
      ? showToast("사용 가능한 이메일입니다")
      : showToast("이미 가입된 이메일입니다")
  }
  const onPressCheckName = () => {
    if (!inputName) return
    const { checkUsername } = queryName.data
    checkUsername
      ? showToast("사용 가능한 닉네임입니다")
      : showToast("이미 사용 중인 닉네임입니다")
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.labelText}>이메일</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            value={inputEmail}
            onChangeText={(v) => setInputEmail(v)}
            placeholder="이메일 주소를 입력해주세요"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={30}
            keyboardType="email-address"
          />
          <CheckUser
            onPress={onPressCheckEmail}
            disabled={queryEmail.loading && true}
          />
        </View>

        <Text style={styles.labelText}>닉네임</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            value={inputName}
            onChangeText={(v) => setInputName(v)}
            placeholder="닉네임을 입력해주세요"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={30}
          />
          <CheckUser
            onPress={onPressCheckName}
            disabled={queryName.loading && true}
          />
        </View>

        <Text style={styles.labelText}>비밀번호</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            value={inputPW}
            onChangeText={(v) => setInputPW(v)}
            placeholder="비밀번호 (8자 이상)"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={30}
            secureTextEntry={true}
          />
        </View>

        <Text style={styles.labelText}>비밀번호 확인</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.loginTextInput}
            value={inputRePW}
            onChangeText={(v) => setInputRePW(v)}
            placeholder="비밀번호를 다시 입력해주세요"
            autoCapitalize="none"
            maxLength={30}
            secureTextEntry={true}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(255,255,255)",
    marginHorizontal: 20,
  },
  labelText: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 4,
  },
  textInputContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  loginTextInput: {
    flex: 1,
    height: 50,
    borderColor: "rgb(215, 215, 215)",
    borderWidth: 1,
    paddingHorizontal: 16,
  },
})

export default SignupInput
