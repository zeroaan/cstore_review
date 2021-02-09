import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useHistory, useLocation } from "react-router-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import styled from "styled-components"

const TouchableOpacityStyled = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${(props) =>
    props.$focus ? "rgb(0, 175, 175)" : "rgb(230,230,230)"};
`

const TextStyled = styled(Text)`
  font-size: 12px;
  color: ${(props) => (props.$focus ? "rgb(0, 175, 175)" : "rgb(200,200,200)")};
`

const NavBottom = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  const tabValue = ["home", "search", "foodlist", "profile"]

  const tabNavigation = (tab) => {
    let iconName, route, text
    if (tab === "home") {
      iconName = "home"
      route = "/"
      text = "홈"
    } else if (tab === "search") {
      iconName = "search"
      route = "/search"
      text = "검색"
    } else if (tab === "foodlist") {
      iconName = "apps"
      route = "/foodlist"
      text = "상품정보"
    } else if (tab === "profile") {
      iconName = "person"
      route = "/profile"
      text = "내정보"
    }
    return (
      <TouchableOpacityStyled
        key={tab}
        $focus={pathname === route}
        onPress={() => history.push(route)}
        activeOpacity={1}>
        <Icon
          name={iconName}
          color={pathname === route ? "rgb(0, 175, 175)" : "rgb(200,200,200)"}
          size={25}
        />
        <TextStyled $focus={pathname === route}>{text}</TextStyled>
      </TouchableOpacityStyled>
    )
  }

  return (
    <View style={styles.container}>
      {tabValue.map((v) => tabNavigation(v))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
})

export default NavBottom
