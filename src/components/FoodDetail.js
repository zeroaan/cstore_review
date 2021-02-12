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
        <View style={styles.foodReviewBtContainer}>
          <TouchableOpacity style={styles.foodReviewBt} activeOpacity={0.7}>
            <Icon name="create" color="rgb(255,255,255)" size={15} />
            <Text style={styles.foodReviewBtText}>리뷰 쓰기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.foodReviewContainer}>
          {food.review.length === 0 ? (
            <Text style={styles.foodReviewText}>리뷰가 없습니다.</Text>
          ) : (
            <Text style={styles.foodReviewText}>
              리뷰 ({food.review.length})
            </Text>
          )}
          {food.review.map((v) => (
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
    backgroundColor: "rgb(255,255,255)",
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },
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
  foodReviewBtContainer: {
    marginTop: 40,
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
  foodReviewContainer: {
    margin: 30,
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
    elevation: 3,
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

export default FoodDetail
