import React, { useState, useEffect } from "react"
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { useSelector } from "react-redux"
import styled from "styled-components"

import Layout from "~/components/Layout"
import Food from "~/components/Food"

const TouchableOpacityStyled = styled(TouchableOpacity)`
  padding: 8px 16px;
  border-bottom-width: ${(props) => (props.$select ? "2px" : "0px")};
  border-color: "rgb(0, 175, 175)";
`

const TextCategory = styled(Text)`
  font-size: 16px;
  color: ${(props) => (props.$select ? "rgb(0, 175, 175)" : "rgb(50, 50, 50)")};
`

const FoodList = () => {
  const { starFoods } = useSelector((state) => state.food)

  const [catState, setCatState] = useState("ALL")
  const [catFoods, setCatFoods] = useState(starFoods)

  useEffect(() => {
    let foods
    const category = ["라면", "과자", "음료"]

    if (catState === "ALL") {
      setCatFoods(starFoods)
      return
    } else if (catState === "기타") {
      foods = starFoods.filter((v) => !category.includes(v.category))
    } else {
      foods = starFoods.filter((v) => v.category === catState)
    }
    setCatFoods(foods)
  }, [catState])

  const SelectCategory = ({ v }) => {
    return (
      <TouchableOpacityStyled
        activeOpacity={0.7}
        onPress={() => setCatState(v)}
        $select={v === catState}>
        <TextCategory $select={v === catState}>{v}</TextCategory>
      </TouchableOpacityStyled>
    )
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.topText}>모든 상품</Text>

        <View style={styles.categoryList}>
          <SelectCategory v="ALL" />
          <SelectCategory v="라면" />
          <SelectCategory v="과자" />
          <SelectCategory v="음료" />
          <SelectCategory v="기타" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.foodContainer}>
            {catFoods.map((v) => (
              <Food key={v._id} item={v} />
            ))}
            {catFoods.length % 2 === 1 && (
              <View style={{ width: "40%", margin: 8 }} />
            )}
          </View>
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

  categoryList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    borderColor: "rgb(240,240,240)",
  },

  foodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 12,
  },
})

export default FoodList
