import React, { useState } from "react"
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { useSelector } from "react-redux"
import Icon from "react-native-vector-icons/MaterialIcons"

import Layout from "~/components/Layout"
import Food from "~/components/Food"

const Search = () => {
  const { starFoods } = useSelector((state) => state.food)

  const [inputText, setInputText] = useState("")
  const [searchFoods, setSearchFoods] = useState([])
  const [noFoods, setNoFoods] = useState(false)

  const onSubmitSearch = () => {
    const foods = []
    starFoods.map((v) => v.name.includes(inputText) && foods.push(v))
    foods.length === 0 ? setNoFoods(true) : setNoFoods(false)
    setSearchFoods(foods)
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.topText}>검색</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={inputText}
            onChangeText={(v) => setInputText(v)}
            placeholder="검색어를 입력해주세요"
            autoCapitalize="none"
            returnKeyType="search"
            maxLength={30}
            autoFocus
            onSubmitEditing={onSubmitSearch}
          />
          <Icon
            style={styles.searchIcon}
            name="search"
            color="rgb(0,175,175)"
            size={24}
            onPress={onSubmitSearch}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            {searchFoods.map((v) => (
              <Food key={v._id} item={v} />
            ))}
            {searchFoods.length % 2 === 1 && (
              <View style={{ width: "40%", margin: 8 }} />
            )}
          </View>
          {noFoods && <Text style={styles.noFood}>검색 결과가 없습니다.</Text>}
        </ScrollView>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
  },
  topText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 18,
    textAlign: "center",
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  searchInput: {
    flex: 1,
    borderRadius: 50,
    marginVertical: 4,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: "rgb(240, 240, 240)",
  },
  searchIcon: {
    marginLeft: 8,
  },

  foodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 12,
  },
  noFood: {
    textAlign: "center",
    fontSize: 14,
  },
})

export default Search
