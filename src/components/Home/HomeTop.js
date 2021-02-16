import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { gql, useQuery } from "@apollo/client"
import Swiper from "react-native-swiper"

const GET_NOTICES = gql`
  query {
    notices {
      _id
      image
    }
  }
`

const HomeTop = () => {
  const { loading, data } = useQuery(GET_NOTICES)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>편리</Text>
      <Swiper style={styles.swiper} autoplay={true} autoplayTimeout={6}>
        {data?.notices?.map((v) => (
          <View key={v._id} style={styles.imgView}>
            <Image style={styles.titleImg} source={{ uri: v.image }} />
          </View>
        ))}
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
    paddingVertical: 18,
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

export default HomeTop
