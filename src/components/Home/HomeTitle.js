import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import Swiper from "react-native-swiper"

import HOMEAD01 from "~/assets/image/homeAd01.png"
import HOMEAD02 from "~/assets/image/homeAd02.png"
import HOMEAD03 from "~/assets/image/homeAd03.png"

const HomeTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>편리</Text>
      <Swiper style={styles.swiper} autoplay={true} autoplayTimeout={6}>
        <View style={styles.imgView}>
          <Image style={styles.titleImg} source={HOMEAD01} />
        </View>
        <View style={styles.imgView}>
          <Image style={styles.titleImg} source={HOMEAD02} />
        </View>
        <View style={styles.imgView}>
          <Image style={styles.titleImg} source={HOMEAD03} />
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 8,
    paddingTop: 18,
    paddingBottom: 12,
  },
  title: {
    color: "rgb(0, 175, 175)",
    fontSize: 26,
    fontFamily: "DoHyeon",
  },
  swiper: {
    height: 180,
  },
  imgView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  titleImg: {
    width: "90%",
    height: 165,
    borderRadius: 20,
  },
})

export default HomeTitle
