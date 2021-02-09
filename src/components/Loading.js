import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Loading = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>편리</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.subText}>의</Text>
          <Text style={styles.subText}>점</Text>
        </View>
        <View>
          <Text style={styles.subText}>뷰</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 175, 175, 0.7)",
  },
  text: {
    fontSize: 50,
    fontFamily: "DoHyeon",
    color: "rgb(255,255,255)",
  },
  subText: {
    fontSize: 50,
    fontFamily: "DoHyeon",
    color: "rgb(0,175,175)",
  },
})

export default Loading
