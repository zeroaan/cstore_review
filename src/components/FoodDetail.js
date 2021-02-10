import React, { useContext, useEffect } from "react"
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  BackHandler,
} from "react-native"
import { useHistory, useParams } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

import { FoodDataContext } from "~/context"

const FoodDetail = () => {
  const history = useHistory()
  const { foodId } = useParams()
  const { foods } = useContext(FoodDataContext)

  const foodDetail = foods.find((v) => v._id === foodId)

  const backAction = () => {
    history.goBack()
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.foodImage}
            source={{ uri: `${foodDetail.image}` }}
          />
        </View>
        <Text style={styles.foodName}>{foodDetail.fullName}</Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
  },
  topText: {
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  foodImage: {
    height: 200,
    width: 200,
  },
  foodName: {
    fontSize: 20,
  },
})

export default FoodDetail
