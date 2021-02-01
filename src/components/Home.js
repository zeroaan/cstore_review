import React from "react"
import { StyleSheet, View, Text, StatusBar } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>편리</Text>
      </View>
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Icon name="home" size={30} color="rgb(0, 175, 175)" />
          <Text style={styles.menuText}>홈</Text>
        </View>
        <View style={styles.menuSubItem}>
          <Icon name="search" size={30} color="rgb(200, 200, 200)" />
          <Text style={styles.menuSubText}>검색</Text>
        </View>
        <View style={styles.menuSubItem}>
          <Icon name="apps" size={30} color="rgb(200, 200, 200)" />
          <Text style={styles.menuSubText}>상품정보</Text>
        </View>
        <View style={styles.menuSubItem}>
          <Icon name="person" size={30} color="rgb(200, 200, 200)" />
          <Text style={styles.menuSubText}>내정보</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "rgb(0, 175, 175)",
    fontSize: 25,
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "rgb(0, 175, 175)",
  },
  menuSubItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 3,
    borderTopColor: "rgb(200, 200, 200)",
  },
  menuText: {
    color: "rgb(0, 175, 175)",
    fontSize: 12,
  },
  menuSubText: {
    color: "rgb(200, 200, 200)",
    fontSize: 12,
  },
})

export default App
