import React from "react"
import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import Layout from "~/components/Layout"
import AfterLogin from "~/components/Profile/AfterLogin"
import BeforeLogin from "~/components/Profile/BeforeLogin"

const Profile = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <Layout>
      <View style={styles.container}>
        {user ? <AfterLogin /> : <BeforeLogin />}
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
