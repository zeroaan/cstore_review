import React from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { useHistory } from "react-router-native"

const Food = ({ item }) => {
  const { _id, image, name, review, liked, price, sumStar } = item

  const history = useHistory()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => history.push(`/food/${_id}`)}
      activeOpacity={1}>
      <Image style={styles.itemImage} source={{ uri: `${image}` }} />
      <View style={styles.item}>
        <Text style={styles.itemName}>{name}</Text>
        <View style={styles.itemDesc}>
          <View style={styles.itemDesc__left}>
            <Text style={styles.itemReview}>리뷰 {review.length}</Text>
            <Text style={styles.itemLiked}>♥ {liked.length}</Text>
          </View>
          <View style={styles.itemDesc__rigth}>
            <Text style={styles.itemStar}>
              평점{" "}
              {sumStar === 0 ? "0.0" : (sumStar / review.length).toFixed(1)}
            </Text>
            <Text style={styles.itemPrice}>{price}원</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 10,
    width: 135,
    backgroundColor: "#ffffff",
    elevation: 3,
  },
  itemImage: {
    height: 80,
    width: 80,
    marginTop: 12,
  },
  item: {
    margin: 12,
  },
  itemName: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  itemDesc: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 110,
  },
  itemDesc__left: {
    alignItems: "flex-start",
  },
  itemDesc__rigth: {
    alignItems: "flex-end",
  },
  itemReview: {
    fontSize: 12,
    color: "rgb(75,75,75)",
  },
  itemLiked: {
    fontSize: 13,
  },
  itemStar: {
    fontSize: 12,
    color: "rgb(254, 68, 80)",
  },
  itemPrice: {
    fontSize: 13,
  },
})

export default Food
