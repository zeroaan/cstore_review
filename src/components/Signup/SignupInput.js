import React, { useState, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native"
import { useHistory } from "react-router-native"
import { gql, useQuery, useMutation } from "@apollo/client"
import styled from "styled-components"

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
const SIGN_UP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password)
  }
`

const SignupInput = () => {
  const history = useHistory()
  const [inputEmail, setInputEmail] = useState({ text: "", check: false })
  const [inputName, setInputName] = useState({ text: "", check: false })
  const [inputPW, setInputPW] = useState({ text: "", check: false })
  const [inputRePW, setInputRePW] = useState({ text: "", check: false })
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const pwRef = useRef(null)
  const rePwRef = useRef(null)

  const queryEmail = useQuery(CHECK_EMAIL, {
    variables: { email: inputEmail.text },
  })
  const queryName = useQuery(CHECK_NAME, {
    variables: { username: inputName.text },
  })
  const [signUp] = useMutation(SIGN_UP, {
    variables: {
      username: inputName.text,
      email: inputEmail.text,
      password: inputPW.text,
    },
  })

  const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
  }

  const onPressCheckEmail = () => {
    if (inputEmail.text.length < 6 || !inputEmail.text.includes("@")) {
      showToast("올바른 이메일 형식이 아닙니다")
      return false
    }
    const { checkEmail } = queryEmail.data
    if (checkEmail) {
      showToast("사용 가능한 이메일입니다")
      nameRef?.current?.focus()
      setInputEmail({ ...inputEmail, check: true })
      return true
    } else {
      showToast("이미 가입된 이메일입니다")
      return false
    }
  }
  const onPressCheckName = () => {
    if (inputName.length < 3) {
      showToast("닉네임이 너무 짧습니다")
      return false
    }
    const { checkUsername } = queryName.data
    if (checkUsername) {
      showToast("사용 가능한 닉네임입니다")
      pwRef?.current?.focus()
      setInputName({ ...inputName, check: true })
      return true
    } else {
      showToast("이미 사용 중인 닉네임입니다")
      return false
    }
  }
  const onSubmitPW = () => {
    if (inputPW.text.length < 6) {
      showToast("최소 6자리 이상 입력해주세요")
      return false
    } else {
      rePwRef?.current?.focus()
      setInputPW({ ...inputPW, check: true })
      return true
    }
  }
  const checkPassword = () => {
    if (inputPW.text === inputRePW.text) {
      setInputRePW({ ...inputRePW, check: true })
      return true
    }
    showToast("비밀번호가 맞지 않습니다")
    return false
  }

  const onSubmitSignup = () => {
    checkPassword()
    if (!inputEmail.check) {
      showToast("이메일을 다시 입력해주세요")
    } else if (!inputName.check) {
      showToast("닉네임을 다시 입력해주세요")
    } else if (!inputPW.check) {
      showToast("비밀번호를 다시 입력해주세요")
    } else if (!inputRePW.check) {
      checkSignup()
    } else {
      checkSignup()
    }
  }
  const checkSignup = () => {
    Alert.alert(
      `가입 정보 확인`,
      `이메일 : ${inputEmail.text}\n닉네임 : ${inputName.text}`,
      [
        {
          text: "취소",
          onPress: () => {
            setInputEmail({ ...inputEmail, check: false })
            setInputName({ ...inputName, check: false })
          },
        },
        {
          text: "확인",
          onPress: () => {
            if (!checkPassword()) return null
            showToast("회원가입 완료")
            signUp()
            history.push("/login")
          },
        },
      ],
    )
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.labelText}>이메일</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={emailRef}
            style={styles.loginTextInput}
            value={inputEmail.text}
            onChangeText={(v) => setInputEmail({ text: v, check: false })}
            placeholder="이메일 주소를 입력해주세요"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={30}
            keyboardType="email-address"
            editable={!inputEmail.check}
          />
          <CheckUser
            onPress={onPressCheckEmail}
            checked={inputEmail.check}
            disabled={queryEmail.loading && true}
          />
        </View>

        <Text style={styles.labelText}>닉네임</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={nameRef}
            style={styles.loginTextInput}
            value={inputName.text}
            onChangeText={(v) => setInputName({ text: v, check: false })}
            placeholder="닉네임을 입력해주세요"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={30}
            editable={!inputName.check}
          />
          <CheckUser
            onPress={onPressCheckName}
            checked={inputName.check}
            disabled={queryName.loading && true}
          />
        </View>

        <Text style={styles.labelText}>비밀번호</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={pwRef}
            style={styles.loginTextInput}
            value={inputPW.text}
            onChangeText={(v) => setInputPW({ text: v, check: false })}
            placeholder="비밀번호 (6자 이상)"
            autoCapitalize="none"
            returnKeyType="next"
            maxLength={30}
            secureTextEntry={true}
            onBlur={onSubmitPW}
          />
        </View>

        <Text style={styles.labelText}>비밀번호 확인</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={rePwRef}
            style={styles.loginTextInput}
            value={inputRePW.text}
            onChangeText={(v) => setInputRePW({ text: v, check: false })}
            placeholder="비밀번호를 다시 입력해주세요"
            autoCapitalize="none"
            maxLength={30}
            secureTextEntry={true}
            onBlur={checkPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.signupBt}
        activeOpacity={0.7}
        onPress={onSubmitSignup}>
        <Text style={styles.signupBtText}>완료</Text>
      </TouchableOpacity>
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

  signupBt: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgb(0, 175, 175)",
  },
  signupBtText: {
    color: "rgb(255, 255, 255)",
    fontSize: 18,
  },
})

const TouchableOpacityStyled = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) =>
    props.disabled ? "rgb(200,200,200)" : "rgb(0, 175, 175)"};
`

export default SignupInput
