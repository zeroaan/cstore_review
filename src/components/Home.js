import React, { useState } from "react"
import { StyleSheet, View, ScrollView, Text } from "react-native"

import ItemSimple from "./ItemSimple"

import { FOODDATA } from "~/data/foodData"

const Home = () => {
  const [foodData, setFoodData] = useState(FOODDATA)

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
            {foodData.map((v) => (
              <ItemSimple item={v} />
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
  },
  title: {
    color: "rgb(0, 175, 175)",
    fontSize: 26,
    fontFamily: "DoHyeon",
  },
  bestContainer: {
    backgroundColor: "white",
    marginVertical: 12,
  },
  bestText: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  bestFood: {
    backgroundColor: "white",
    marginHorizontal: 8,
    paddingBottom: 12,
  },
})

export default Home
