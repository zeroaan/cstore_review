import React from "react"
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import { gql, useQuery } from "@apollo/client"

import ItemSimple from "./ItemSimple"

import HOMEIMG from "~/assets/image/homeImg.png"

const GET_FOODS = gql`
  query {
    foods {
      _id
      name
      price
      image
      liked
      review {
        star
      }
    }
  }
`

const Home = () => {
  const { loading, data } = useQuery(GET_FOODS)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  const bestStarData = [...data.foods].sort(function (a, b) {
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
  const bestLikedData = [...data.foods].sort(function (a, b) {
    return b.liked - a.liked
  })
  const bestReviewData = [...data.foods].sort(function (a, b) {
    return b.review.length - a.review.length
  })

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>편리</Text>
        <Image style={styles.titleImg} source={HOMEIMG} />
      </View>
      <View style={styles.maincontainer}>
        <View style={styles.bestContainer}>
          <Text style={styles.bestText}>Best 상품</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.bestFood}>
            {bestStarData?.map((v) => (
              <ItemSimple key={v._id} item={v} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.bestContainer}>
          <Text style={styles.bestText}>좋아요 많은 상품</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.bestFood}>
            {bestLikedData?.map((v) => (
              <ItemSimple key={v._id} item={v} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.bestContainer}>
          <Text style={styles.bestText}>리뷰 많은 상품</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.bestFood}>
            {bestReviewData?.map((v) => (
              <ItemSimple key={v._id} item={v} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 8,
    paddingTop: 18,
    paddingBottom: 12,
  },
  title: {
    color: "rgb(0, 175, 175)",
    fontSize: 26,
    fontFamily: "DoHyeon",
  },
  titleImg: {
    width: "90%",
    height: 150,
    borderRadius: 20,
    marginTop: 16,
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
