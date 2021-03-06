import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native"
import { useHistory } from "react-router-native"
import { useDispatch, useSelector } from "react-redux"
import { gql, useMutation } from "@apollo/client"

import { updateUser } from "~/store/actions/user"

import LayoutGoBack from "~/components/LayoutGoBack"
import TopBack from "~/components/TopBack"

const CHANGE_NAME = gql`
  mutation changeUsername($_id: ID!, $username: String!) {
    changeUsername(_id: $_id, username: $username) {
      _id
      username
      email
      myliked
      myreview
    }
  }
`

const ChangeName = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const [inputName, setInputName] = useState(user.username)

  const [changeName, { data }] = useMutation(CHANGE_NAME, {
    variables: { _id: user?._id, username: inputName },
  })

  useEffect(() => {
    data && dispatch(updateUser(data.changeUsername))
  }, [data])

  const onPressCompleteBt = () => {
    if (!inputName) {
      ToastAndroid.show("닉네임을 입력해주세요", ToastAndroid.SHORT)
      return false
    }
    Alert.alert("", "확인을 누르면 닉네임이 변경됩니다.", [
      { text: "취소", onPress: () => null },
      {
        text: "확인",
        onPress: async () => {
          await changeName()
          history.goBack()
          ToastAndroid.show("닉네임 변경 완료", ToastAndroid.SHORT)
        },
      },
    ])
    return true
  }

  return (
    <LayoutGoBack>
      <View style={styles.container}>
        <TopBack title="닉네임 변경" />

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.nameInput}
            value={inputName}
            onChangeText={(v) => setInputName(v)}
            placeholder="새 닉네임을 입력해주세요"
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            maxLength={30}
            autoFocus
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelBt}
            activeOpacity={0.7}
            onPress={() => history.goBack()}>
            <Text style={styles.cancelBtText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.completeBt}
            activeOpacity={0.7}
            onPress={onPressCompleteBt}>
            <Text style={styles.completeBtText}>변경</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutGoBack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },

  textInputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  nameInput: {
    flex: 1,
    height: 52,
    borderColor: "rgb(215, 215, 215)",
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: "row",
    padding: 18,
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
  completeBt: {
    flex: 1,
    height: 50,
    backgroundColor: "rgb(0, 175, 175)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  completeBtText: {
    fontSize: 18,
    color: "rgb(255,255,255)",
  },
})

export default ChangeName
