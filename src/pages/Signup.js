import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import LayoutGoBack from "~/components/LayoutGoBack"
import MyTextInput from "~/components/Signup/MyTextInput"
import CheckUser from "~/components/Signup/CheckUser"

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

      <View style={styles.container}>
        <MyTextInput label="이메일" placeholder="이메일 주소를 입력해주세요">
          <CheckUser />
        </MyTextInput>
        <MyTextInput label="비밀번호" placeholder="비밀번호 (8자 이상)" />
        <MyTextInput
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <MyTextInput
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          returnKeyType="done">
          <CheckUser />
        </MyTextInput>
      </View>

      <TouchableOpacity style={styles.signupBt} activeOpacity={0.7}>
        <Text style={styles.signupBtText}>완료</Text>
      </TouchableOpacity>
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

export default Signup
