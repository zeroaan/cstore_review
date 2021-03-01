import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import LayoutGoBack from "~/components/LayoutGoBack"
import TopBack from "~/components/TopBack"
import Food from "~/components/Food"

const MyReview = () => {
  const { user } = useSelector((state) => state.user)
  const { foods } = useSelector((state) => state.food)

  return (
    <LayoutGoBack>
      <View style={styles.container}>
        <TopBack title="My 리뷰 상품" />

        {user.myreview.length === 0 && (
          <Text style={styles.noReview}>작성한 리뷰가 없습니다.</Text>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.likedContainer}>
            {foods.map(
              (v) =>
                user.myreview.includes(v._id) && <Food key={v._id} item={v} />,
            )}
            {user.myreview.length % 2 === 1 && (
              <View style={{ width: "40%", margin: 8 }} />
            )}
          </View>
        </ScrollView>
      </View>
    </LayoutGoBack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },

  noReview: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 14,
  },
  likedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
})

export default MyReview
