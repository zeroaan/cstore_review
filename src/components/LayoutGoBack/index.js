import React, { useEffect } from "react"
import { BackHandler } from "react-native"
import { useHistory } from "react-router-native"

const LayoutGoBack = ({ children }) => {
  const history = useHistory()

  const backAction = () => {
    history.goBack()
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

  return <>{children}</>
}

export default LayoutGoBack
