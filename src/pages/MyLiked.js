import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

import LayoutGoBack from "~/components/LayoutGoBack"
import TopBack from "~/components/TopBack"
import Food from "~/components/Food"

const MyLiked = () => {
  const { user } = useSelector((state) => state.user)
  const { foods } = useSelector((state) => state.food)

  return (
    <LayoutGoBack>
      <View style={styles.container}>
        <TopBack title="My 좋아요 상품" />

        {user.myliked.length === 0 && (
          <Text style={styles.noLiked}>좋아요 상품이 없습니다.</Text>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.likedContainer}>
            {foods.map(
              (v) =>
                user.myliked.includes(v._id) && <Food key={v._id} item={v} />,
            )}
            {user.myliked.length % 2 === 1 && (
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

  noLiked: {
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

export default MyLiked
