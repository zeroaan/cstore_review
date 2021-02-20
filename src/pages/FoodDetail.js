import React, { useState, useEffect } from "react"
import { View, ScrollView, Text, Image, StyleSheet } from "react-native"
import { useParams } from "react-router-native"
import { useSelector } from "react-redux"
import Icon from "react-native-vector-icons/MaterialIcons"

import FoodDetailTop from "~/components/FoodDetail/FoodDetailTop"
import FoodReviewBt from "~/components/FoodDetail/FoodReviewBt"
import FoodReview from "~/components/FoodDetail/FoodReview"

import LayoutGoBack from "~/components/LayoutGoBack"

const FoodDetail = () => {
  const { foodId } = useParams()

  const { foods } = useSelector((state) => state.food)
  const [food, setFood] = useState(foods.find((v) => v._id === foodId))

  useEffect(() => {
    setFood(foods.find((v) => v._id === foodId))
  }, [foods])

  return (
    <LayoutGoBack>
      <FoodDetailTop food={food} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.foodImage} source={{ uri: `${food.image}` }} />
        </View>
        <View style={styles.foodMainContainer}>
          <Text style={styles.foodName}>{food.fullName}</Text>
          <Text style={styles.foodStar}>
            ⭐{" "}
            {food.sumStar === 0
              ? "0.0"
              : (food.sumStar / food.review.length).toFixed(1)}
          </Text>
          <Text style={styles.foodPrice}>{food.price}원</Text>
        </View>
        <View style={styles.foodSubContainer}>
          <Icon name="favorite" color="rgb(180,180,180)" size={15} />
          <Text style={styles.foodSubDesc}>좋아요 {food.liked.length}</Text>
          <Icon name="create" color="rgb(180,180,180)" size={15} />
          <Text style={styles.foodSubDesc}>리뷰 {food.review.length}</Text>
        </View>

        <FoodReviewBt foodId={food._id} />
        <FoodReview review={food.review} />
      </ScrollView>
    </LayoutGoBack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  foodImage: {
    height: 150,
    width: 150,
  },
  foodMainContainer: {
    marginHorizontal: 30,
  },
  foodName: {
    marginVertical: 8,
    fontSize: 24,
    fontWeight: "bold",
  },
  foodStar: {
    marginVertical: 8,
    color: "rgb(254, 68, 80)",
    fontSize: 21,
    fontWeight: "bold",
  },
  foodPrice: {
    marginVertical: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  foodSubContainer: {
    marginVertical: 10,
    marginHorizontal: 30,
    paddingBottom: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "rgb(200,200,200)",
    borderBottomWidth: 0.5,
  },
  foodSubDesc: {
    fontSize: 14,
    color: "rgb(160,160,160)",
    marginLeft: 4,
    marginRight: 14,
  },
})

export default FoodDetail
