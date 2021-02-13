import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const FoodReview = ({ review }) => {
  return (
    <>
      <View style={styles.foodReviewContainer}>
        {review.length === 0 ? (
          <Text style={styles.foodReviewText}>리뷰가 없습니다.</Text>
        ) : (
          <Text style={styles.foodReviewText}>리뷰 ({review.length})</Text>
        )}
        {review.map((v) => (
          <View key={v._id} style={styles.foodReview}>
            <View style={styles.foodReviewTop}>
              <Icon name="person-outline" color="rgb(0,175,175)" size={28} />
              <View style={styles.foodReviewTopMid}>
                <Text style={styles.foodReviewNickName}>{v.nickName}</Text>
                <Text style={styles.foodReviewDate}>{v.date}</Text>
              </View>
              <Text style={styles.foodReviewStar}>⭐ {v.star}</Text>
            </View>
            <Text style={styles.foodReviewPost}>{v.post}</Text>
          </View>
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  foodReviewContainer: {
    marginHorizontal: 30,
    marginBottom: 30,
  },
  foodReviewText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  foodReview: {
    paddingVertical: 26,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "rgb(255,255,255)",
    elevation: 2,
  },
  foodReviewTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  foodReviewTopMid: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft: 10,
  },
  foodReviewNickName: {
    fontSize: 16,
    color: "rgb(0,0,0)",
  },
  foodReviewDate: {
    marginLeft: 10,
    fontSize: 14,
    color: "rgb(150,150,150)",
  },
  foodReviewStar: {
    fontSize: 16,
    color: "rgb(254, 68, 80)",
  },
  foodReviewPost: {
    fontSize: 16,
    color: "rgb(0,0,0)",
  },
})

export default FoodReview
