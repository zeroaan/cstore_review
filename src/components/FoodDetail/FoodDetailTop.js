import React, { useContext } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import { DataContext } from "~/context"

const FoodDetailTop = () => {
  const { users } = useContext(DataContext)
  const history = useHistory()

  const onPressLikeBt = () => {
    if (users) {
      return
    }
    Alert.alert("", "로그인 후 이용 가능합니다.", [
      { text: "취소", onPress: () => null },
      { text: "로그인", onPress: () => history.push("/login") },
    ])
    return true
  }

  return (
    <>
      <View style={styles.topContainer}>
        <Icon
          name="arrow-back-ios"
          color="rgb(0,175,175)"
          size={25}
          onPress={() => history.goBack()}
        />
        <Text style={styles.topText}>제품정보</Text>
        <Icon
          name="favorite"
          color="rgb(200,200,200)"
          size={25}
          onPress={onPressLikeBt}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "rgb(255,255,255)",
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default FoodDetailTop
