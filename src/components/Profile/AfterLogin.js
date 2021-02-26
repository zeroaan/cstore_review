import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Icon from "react-native-vector-icons/MaterialIcons"

import { logout } from "~/store/actions/user"

const AfterLogin = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const onPressLogout = () => {
    Alert.alert("", "로그아웃 하시겠습니까?", [
      { text: "취소", onPress: () => null },
      { text: "확인", onPress: () => dispatch(logout()) },
    ])
  }

  return (
    <>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>마이페이지</Text>
        <View style={styles.profile}>
          <Icon name="person" color="rgb(0,175,175)" size={100} />
          <View style={styles.profileText}>
            <Text style={styles.profileName}>{user.username}</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutBt}
          activeOpacity={0.7}
          onPress={onPressLogout}>
          <Text style={styles.logoutBtText}>로그아웃</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBt}
          activeOpacity={0.7}
          onPress={() => null}>
          <Text style={styles.menuText}>닉네임 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBt}
          activeOpacity={0.7}
          onPress={() => null}>
          <Text style={styles.menuText}>My 좋아요 상품</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBt}
          activeOpacity={0.7}
          onPress={() => null}>
          <Text style={styles.menuText}>My 리뷰 상품</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    paddingVertical: 18,
    borderColor: "rgb(240,240,240)",
    borderBottomWidth: 1,
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profile: {
    flexDirection: "row",
    width: "90%",
  },
  profileText: {
    marginTop: 30,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
  },

  logoutBt: {
    width: 200,
    height: 40,
    backgroundColor: "rgb(0, 175, 175)",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  logoutBtText: {
    fontSize: 16,
    color: "rgb(255,255,255)",
  },

  menuContainer: {
    marginTop: 8,
    backgroundColor: "rgb(255,255,255)",
    borderColor: "rgb(240,240,240)",
    borderTopWidth: 1,
  },
  menuBt: {
    borderColor: "rgb(240,240,240)",
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 18,
    marginVertical: 14,
    marginHorizontal: 20,
  },
})

export default AfterLogin
