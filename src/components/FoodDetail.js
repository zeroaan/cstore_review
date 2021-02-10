import React, { useEffect } from "react"
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from "react-native"
import { useHistory, useLocation } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

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
      <View style={styles.topContainer}>
        <Icon
          name="arrow-back-ios"
          color="rgb(0,175,175)"
          size={25}
          onPress={() => history.goBack()}
        />
        <Text style={styles.topText}>제품정보</Text>
        <Icon name="favorite" color="rgb(200,200,200)" size={25} />
      </View>
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
        <View style={styles.foodReviewContainer}>
          <TouchableOpacity style={styles.foodReviewBt}>
            <Icon name="create" color="rgb(255,255,255)" size={15} />
            <Text style={styles.foodReviewBtText}>리뷰 쓰기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
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
    paddingBottom: 35,
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
  foodReviewContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  foodReviewBt: {
    width: 150,
    backgroundColor: "rgb(254, 68, 80)",
    borderRadius: 50,
    height: 45,
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

export default FoodDetail
