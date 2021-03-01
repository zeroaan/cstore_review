import React from "react"
import { Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { useHistory } from "react-router-native"

const TopBack = ({ title }) => {
  const history = useHistory()

  return (
    <>
      <Icon
        style={styles.backIcon}
        name="arrow-back-ios"
        color="rgb(0,0,0)"
        size={25}
        onPress={() => history.goBack()}
      />
      <Text style={styles.topText}>{title}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    top: 16,
    left: 14,
    zIndex: 1,
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 18,
    textAlign: "center",
  },
})

export default TopBack
