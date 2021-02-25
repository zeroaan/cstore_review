import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native"
import { useHistory, useParams } from "react-router-native"
import { useDispatch, useSelector } from "react-redux"
import { gql, useMutation } from "@apollo/client"
import Icon from "react-native-vector-icons/MaterialIcons"

import { addFood } from "~/store/actions/food"
import { updateUser } from "~/store/actions/user"

import LayoutGoBack from "~/components/LayoutGoBack"
import AddReviewStar from "~/components/AddReview/AddReviewStar"

const REVIEW_FOOD = gql`
  mutation updateFoodReview(
    $_id: ID!
    $userid: String!
    $username: String!
    $date: String!
    $post: String!
    $star: Float!
  ) {
    updateFoodReview(
      _id: $_id
      userid: $userid
      username: $username
      date: $date
      post: $post
      star: $star
    ) {
      _id
      name
      fullName
      price
      image
      liked
      sumStar
      category
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
const REVIEW_USER = gql`
  mutation updateUserReview($_id: ID!, $myreivew: String!) {
    updateUserReview(_id: $_id, myreivew: $myreivew) {
      _id
      username
      email
      myliked
      myreview
    }
  }
`

const AddReview = () => {
  const { foodId } = useParams()

  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  console.log(user)
  const [inputPost, setInputPost] = useState("")
  const [inputStar, setInputStar] = useState(0)

  const [reviewFood, { data: foodData }] = useMutation(REVIEW_FOOD, {
    variables: {
      _id: foodId,
      userid: user?._id,
      username: user?.username,
      date: new Date(),
      post: inputPost,
      star: inputStar,
    },
  })
  const [reviewUser, { data: userData }] = useMutation(REVIEW_USER, {
    variables: { _id: user?._id, myreview: foodId },
  })

  useEffect(() => {
    foodData && dispatch(addFood(foodData.updateFoodReview))
    userData && dispatch(updateUser(userData.updateUserReview))
  }, [foodData, userData])

  const onPressReviewBt = () => {
    if (!inputPost) {
      ToastAndroid.show("리뷰를 입력해주세요", ToastAndroid.SHORT)
      return false
    } else if (inputStar === 0) {
      ToastAndroid.show("별점을 선택하세요", ToastAndroid.SHORT)
      return false
    }
    if (user) {
      Alert.alert("", "확인을 누르면 리뷰 작성이 완료됩니다.", [
        { text: "취소", onPress: () => null },
        {
          text: "확인",
          onPress: async () => {
            await reviewFood()
            await reviewUser()
            history.goBack()
          },
        },
      ])
      return true
    }
  }

  return (
    <LayoutGoBack>
      <View style={styles.container}>
        <Icon
          style={styles.closeIcon}
          name="close"
          color="rgb(0,0,0)"
          size={25}
          onPress={() => history.goBack()}
        />
        <Text style={styles.topText}>리뷰 작성</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.reviewInput}
            value={inputPost}
            onChangeText={(v) => setInputPost(v)}
            placeholder="리뷰를 입력해주세요"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            multiline={true}
            autoFocus
          />
        </View>

        <AddReviewStar star={inputStar} setStar={setInputStar} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelBt}
            activeOpacity={0.7}
            onPress={() => history.goBack()}>
            <Text style={styles.cancelBtText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reviewBt}
            activeOpacity={0.7}
            onPress={onPressReviewBt}>
            <Text style={styles.reviewBtText}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutGoBack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 18,
    backgroundColor: "rgb(255,255,255)",
  },
  closeIcon: {
    position: "absolute",
    top: 16,
    left: 14,
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  textInputContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 15,
  },
  reviewInput: {
    flex: 1,
    height: 150,
    borderColor: "rgb(215, 215, 215)",
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  cancelBt: {
    flex: 1,
    height: 50,
    backgroundColor: "rgb(255, 255, 255)",
    borderColor: "rgb(0, 175, 175)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  cancelBtText: {
    fontSize: 18,
    color: "rgb(0 , 175, 175)",
  },
  reviewBt: {
    flex: 1,
    height: 50,
    backgroundColor: "rgb(0, 175, 175)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  reviewBtText: {
    fontSize: 18,
    color: "rgb(255,255,255)",
  },
})

export default AddReview
