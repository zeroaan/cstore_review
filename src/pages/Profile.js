import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useHistory } from "react-router-native"
import { useDispatch, useSelector } from "react-redux"

import { logout } from "~/store/actions/user"

import Layout from "~/components/Layout"

const Profile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const onPressLogout = () => {
    dispatch(logout())
    history.push("/")
  }

  return (
    <Layout>
      <View style={styles.container}>
        {user ? (
          <View style={styles.topContainer}>
            <Text style={styles.topText}>마이페이지</Text>
            <TouchableOpacity
              style={styles.logoutBt}
              activeOpacity={0.7}
              onPress={onPressLogout}>
              <Text style={styles.logoutBtText}>로그아웃</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.beforeLoginContainer}>
            <Text style={styles.beforeLogin}>로그인 후 이용하세요</Text>
            <TouchableOpacity
              style={styles.beforeLoginBt}
              activeOpacity={0.7}
              onPress={() => history.push("/login")}>
              <Text style={styles.beforeLoginBtText}>로그인</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)",
    marginBottom: 8,
    paddingVertical: 18,
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutBt: {
    width: 200,
    height: 40,
    backgroundColor: "rgb(0, 175, 175)",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  logoutBtText: {
    fontSize: 16,
    color: "rgb(255,255,255)",
  },

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

export default Profile
