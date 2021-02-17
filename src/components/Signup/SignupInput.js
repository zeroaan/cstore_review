import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { gql, useQuery } from "@apollo/client"

import CheckUser from "~/components/Signup/CheckUser"

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

  const checkName = useQuery(CHECK_NAME, {
    variables: { username: inputName },
  })

  const onPressCheckName = () => {
    console.log(checkName.data)
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
          />
          <CheckUser />
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
            disabled={checkName.loading && true}
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
