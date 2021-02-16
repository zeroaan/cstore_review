import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import { DataContext } from "~/context"

const FoodReviewBt = () => {
  const { users } = useContext(DataContext)
  const history = useHistory()

  const onPressReviewBt = () => {
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
      <View style={styles.foodReviewBtContainer}>
        <TouchableOpacity
          style={styles.foodReviewBt}
          activeOpacity={0.7}
          onPress={onPressReviewBt}>
          <Icon name="create" color="rgb(255,255,255)" size={15} />
          <Text style={styles.foodReviewBtText}>리뷰 쓰기</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  foodReviewBtContainer: {
    marginVertical: 40,
    alignItems: "center",
  },
  foodReviewBt: {
    width: 150,
    height: 45,
    backgroundColor: "rgb(0, 175, 175)",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  foodReviewBtText: {
    fontSize: 16,
    color: "rgb(255,255,255)",
    marginLeft: 10,
  },
})

export default FoodReviewBt
