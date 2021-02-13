import React, { useEffect } from "react"
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  BackHandler,
} from "react-native"
import { useHistory, useLocation } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import FoodDetailTop from "~/components/FoodDetail/FoodDetailTop"
import FoodReviewBt from "~/components/FoodDetail/FoodReviewBt"
import FoodReview from "~/components/FoodDetail/FoodReview"

const FoodDetail = () => {
  const history = useHistory()
  const {
    state: { food, star },
  } = useLocation()

  const backAction = () => {
    history.goBack()
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

  return (
    <>
      <FoodDetailTop />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.foodImage} source={{ uri: `${food.image}` }} />
        </View>
        <View style={styles.foodMainContainer}>
          <Text style={styles.foodName}>{food.fullName}</Text>
          <Text style={styles.foodStar}>⭐ {star}</Text>
          <Text style={styles.foodPrice}>{food.price}원</Text>
        </View>
        <View style={styles.foodSubContainer}>
          <Icon name="favorite" color="rgb(180,180,180)" size={15} />
          <Text style={styles.foodSubDesc}>좋아요 {food.liked}</Text>
          <Icon name="create" color="rgb(180,180,180)" size={15} />
          <Text style={styles.foodSubDesc}>리뷰 {food.review.length}</Text>
        </View>

        <FoodReviewBt />
        <FoodReview review={food.review} />
      </ScrollView>
    </>
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
