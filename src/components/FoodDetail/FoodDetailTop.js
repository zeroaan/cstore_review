import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const FoodReview = () => {
  const history = useHistory()

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
})

export default FoodReview
