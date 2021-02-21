import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const FoodReviewStar = ({ star, setStar }) => {
  const starColor = (n) => {
    if (star - n >= 1) {
      return "star"
    } else if (star - n >= 0.5) {
      return "star-half"
    } else {
      return "star-border"
    }
  }

  const TouchStar = ({ rate }) => {
    return (
      <TouchableOpacity
        style={styles.touchStar}
        onPress={() => setStar(rate)}
      />
    )
  }
  const StarText = (rate) => {
    if (rate === 0) return `별점을 선택하세요`
    else if (rate <= 0.5) return `${rate}점 (최악이에요)`
    else if (rate <= 1.5) return `${rate}점 (별로에요)`
    else if (rate <= 2.5) return `${rate}점 (그저그래요)`
    else if (rate <= 3.5) return `${rate}점 (괜찮아요)`
    else if (rate <= 4.5) return `${rate}점 (좋아요)`
    else return `${rate}점 (최고예요)`
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.starContainer}>
          <Icon name={starColor(0)} color="rgb(255, 204, 0)" size={40} />
          <Icon name={starColor(1)} color="rgb(255, 204, 0)" size={40} />
          <Icon name={starColor(2)} color="rgb(255, 204, 0)" size={40} />
          <Icon name={starColor(3)} color="rgb(255, 204, 0)" size={40} />
          <Icon name={starColor(4)} color="rgb(255, 204, 0)" size={40} />
        </View>
        <View style={styles.touchContainer}>
          <TouchStar rate={0.5} />
          <TouchStar rate={1} />
          <TouchStar rate={1.5} />
          <TouchStar rate={2} />
          <TouchStar rate={2.5} />
          <TouchStar rate={3} />
          <TouchStar rate={3.5} />
          <TouchStar rate={4} />
          <TouchStar rate={4.5} />
          <TouchStar rate={5} />
        </View>
        <Text style={styles.starText}>{StarText(star)}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
    width: 200,
    height: 40,
  },
  touchContainer: {
    position: "absolute",
    flexDirection: "row",
    width: 200,
    height: 40,
  },
  touchStar: {
    width: 20,
    height: 40,
  },
  starText: {
    marginTop: 8,
    fontSize: 14,
    color: "rgb(100,100,100)",
  },
})

export default FoodReviewStar
