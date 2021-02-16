import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useHistory } from "react-router-native"

import Layout from "~/components/Layout"

const Profile = () => {
  const history = useHistory()

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>마이페이지</Text>
          <Text style={styles.beforeLogin}>로그인 후 이용하세요</Text>
          <TouchableOpacity
            style={styles.beforeLoginBt}
            activeOpacity={0.7}
            onPress={() => history.push("/login")}>
            <Text style={styles.beforeLoginBtText}>로그인</Text>
          </TouchableOpacity>
        </View>
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
  beforeLogin: {
    marginVertical: 40,
    fontSize: 16,
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
