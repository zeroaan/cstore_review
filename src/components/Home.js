import React from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"

import ItemSimple from "./ItemSimple"

import { bestStarData, bestReviewData } from "~/data/foodData"

const Home = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>편리</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.bestContainer}>
          <Text style={styles.bestText}>Best 상품</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.bestFood}>
            {bestStarData.map((v) => (
              <ItemSimple key={v.id} item={v} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.bestContainer}>
          <Text style={styles.bestText}>Best 리뷰</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.bestFood}>
            {bestReviewData.map((v) => (
              <ItemSimple key={v.id} item={v} />
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 8,
    paddingTop: 12,
  },
  title: {
    color: "rgb(0, 175, 175)",
    fontSize: 26,
    fontFamily: "DoHyeon",
  },
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
