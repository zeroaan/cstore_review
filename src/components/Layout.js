import React, { useEffect } from "react"
import { BackHandler, Alert } from "react-native"

import NavBottom from "~/components/NavBottom"

const Layout = ({ children }) => {
  const backAction = () => {
    Alert.alert("", "편리를 종료하시겠습니까?", [
      { text: "취소", onPress: () => null },
      { text: "종료", onPress: () => BackHandler.exitApp() },
    ])
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

  return (
    <>
      {children}
      <NavBottom />
    </>
  )
}

export default Layout
