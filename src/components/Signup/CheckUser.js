import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const MyTextInput = ({ ...props }) => {
  return (
    <>
      <TouchableOpacity style={styles.checkBt} activeOpacity={0.7} {...props}>
        <Text style={styles.checkBtText}>중복확인</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  checkBt: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0, 175, 175)",
    paddingHorizontal: 10,
  },
  checkBtText: {
    color: "rgb(255, 255, 255)",
    fontSize: 14,
  },
})

export default MyTextInput
