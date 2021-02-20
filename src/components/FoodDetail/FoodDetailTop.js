import React, { useEffect } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"
import { useHistory } from "react-router-native"
import { useDispatch, useSelector } from "react-redux"
import { gql, useMutation } from "@apollo/client"
import Icon from "react-native-vector-icons/MaterialIcons"

import { addFood } from "~/store/actions/food"

const LIKED_FOOD = gql`
  mutation updateFoodLiked($_id: ID!, $liked: String!) {
    updateFoodLiked(_id: $_id, liked: $liked) {
      _id
      name
      fullName
      price
      image
      liked
      review {
        _id
        userid
        username
        date
        post
        star
      }
    }
  }
`

const FoodDetailTop = ({ food }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const [likedFood, { data }] = useMutation(LIKED_FOOD, {
    variables: { _id: food._id, liked: user?._id },
  })

  useEffect(() => {
    data && dispatch(addFood(data.updateFoodLiked))
  }, [data])

  const onPressLikeBt = () => {
    if (user) {
      likedFood()
      return true
    }
    Alert.alert("", "로그인 후 이용 가능합니다.", [
      { text: "취소", onPress: () => null },
      { text: "로그인", onPress: () => history.push("/login") },
    ])
    return false
  }

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
        <Icon
          name="favorite"
          color={
            food.liked.includes(user?._id)
              ? "rgb(235, 61, 57)"
              : "rgb(200,200,200)"
          }
          size={25}
          onPress={onPressLikeBt}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "rgb(255,255,255)",
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default FoodDetailTop
