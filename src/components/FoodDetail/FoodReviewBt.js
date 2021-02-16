import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const FoodReviewBt = () => {
  return (
    <>
      <View style={styles.foodReviewBtContainer}>
        <TouchableOpacity style={styles.foodReviewBt} activeOpacity={0.7}>
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
    backgroundColor: "rgb(254, 68, 80)",
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
