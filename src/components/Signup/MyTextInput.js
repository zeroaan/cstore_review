import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"

const MyTextInput = ({ label, placeholder, children, ...props }) => {
  const [inputText, setInputText] = useState("")

  return (
    <>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.loginTextInput}
          value={inputText}
          onChangeText={(v) => setInputText(v)}
          placeholder={placeholder}
          autoCapitalize="none"
          returnKeyType="next"
          maxLength={30}
          {...props}
        />
        {children}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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

export default MyTextInput
