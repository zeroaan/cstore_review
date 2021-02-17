import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import LayoutGoBack from "~/components/LayoutGoBack"
import MyTextInput from "~/components/MyTextInput"

const Signup = () => {
  const history = useHistory()
  const [inputEmail, setInputEmail] = useState("")
  const [inputPw, setInputPw] = useState("")
  const [inputRePw, setInputRePw] = useState("")

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

      <View style={styles.container}>
        <MyTextInput label="이메일" placeholder="이메일 주소를 입력해주세요" />
        <MyTextInput label="비밀번호" placeholder="비밀번호 (8자 이상)" />
        <MyTextInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <MyTextInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          returnKeyType="done"
        />
      </View>
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

export default Signup
