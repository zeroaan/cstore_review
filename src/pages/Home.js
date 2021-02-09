import React, { useContext } from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"

import { FoodDataContext } from "~/context"

import HomeTitle from "~/components/Home/HomeTitle"
import ItemSimple from "~/components/Home/ItemSimple"

const Home = () => {
  const { foods } = useContext(FoodDataContext)

  const bestStarData = [...foods].sort(function (a, b) {
    let sumA = 0,
      sumB = 0,
      resultA,
      resultB
    a.review.map((v) => (sumA += v.star))
    b.review.map((v) => (sumB += v.star))
    a.review.length === 0 ? (resultA = 0) : (resultA = sumA / a.review.length)
    b.review.length === 0 ? (resultB = 0) : (resultB = sumB / b.review.length)
    return resultB - resultA
  })
  const bestLikedData = [...foods].sort(function (a, b) {
    return b.liked - a.liked
  })
  const bestReviewData = [...foods].sort(function (a, b) {
    return b.review.length - a.review.length
  })
  const FoodData = [
    { id: 0, title: "Best 상품", data: bestStarData },
    { id: 1, title: "좋아요 많은 상품", data: bestLikedData },
    { id: 2, title: "리뷰 많은 상품", data: bestReviewData },
  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <HomeTitle />
      <View style={styles.maincontainer}>
        {FoodData.map((fData) => (
          <View key={fData.id} style={styles.bestContainer}>
            <Text style={styles.bestText}>{fData.title}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.bestFood}>
              {fData.data?.map((v) => (
                <ItemSimple key={v._id} item={v} />
              ))}
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {},
  bestContainer: {
    backgroundColor: "white",
    marginBottom: 8,
  },
  bestText: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
  },
  bestFood: {
    backgroundColor: "white",
    marginHorizontal: 8,
    paddingBottom: 12,
  },
})

export default Home
