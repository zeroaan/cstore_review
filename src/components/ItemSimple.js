import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"

const ItemSimple = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.itemImage} source={{ uri: `${item.image}` }} />
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemDesc}>
          <View style={styles.itemDesc__left}>
            <Text style={styles.itemReview}>리뷰 {item.review}</Text>
            <Text style={styles.itemStar}>평점 {item.star}</Text>
          </View>
          <View style={styles.itemDesc__rigth}>
            <Text style={styles.itemPrice}>{item.price}원</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 10,
    width: 130,
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
    marginTop: 4,
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
    color: "rgb(100,100,100)",
  },
  itemStar: {
    fontSize: 12,
    color: "rgb(254, 68, 80)",
  },
  itemPrice: {
    fontSize: 14,
  },
})

export default ItemSimple
