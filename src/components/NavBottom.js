import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useHistory } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const NavBottom = () => {
  const history = useHistory()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => history.push("/")}>
        <Icon name="home" color="rgb(0, 175, 175)" size={30} />
        <Text>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => history.push("/search")}>
        <Icon name="search" color="rgb(0, 175, 175)" size={30} />
        <Text>검색</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => history.push("/foodlist")}>
        <Icon name="apps" color="rgb(0, 175, 175)" size={30} />
        <Text>상품정보</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => history.push("/profile")}>
        <Icon name="person" color="rgb(0, 175, 175)" size={30} />
        <Text>내정보</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "rgb(225,225,225)",
  },
})

export default NavBottom
