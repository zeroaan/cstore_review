import React from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"
import { useSelector } from "react-redux"

import Loading from "~/components/Loading"
import Layout from "~/components/Layout"
import HomeTop from "~/components/Home/HomeTop"
import FoodSimple from "~/components/Home/FoodSimple"

const Home = () => {
  const { foods, starFoods, likedFoods, reviewFoods } = useSelector(
    (state) => state.food,
  )

  const FoodData = [
    { id: 0, title: "Best 상품", data: starFoods },
    { id: 1, title: "좋아요 많은 상품", data: likedFoods },
    { id: 2, title: "리뷰 많은 상품", data: reviewFoods },
  ]

  if (!foods) {
    return <Loading />
  }
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HomeTop />
        <View style={styles.maincontainer}>
          {FoodData.map((fData) => (
            <View key={fData.id} style={styles.bestContainer}>
              <Text style={styles.bestText}>{fData.title}</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.bestFood}>
                {fData.data?.slice(0, 10).map((v) => (
                  <FoodSimple key={v._id} item={v} />
                ))}
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>
    </Layout>
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
