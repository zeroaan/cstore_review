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

  const tabValue = [
    { tab: "home", iconName: "home", route: "/", text: "홈" },
    { tab: "search", iconName: "search", route: "/search", text: "검색" },
    { tab: "foodlist", iconName: "apps", route: "/foodlist", text: "상품검색" },
    { tab: "profile", iconName: "person", route: "/profile", text: "내정보" },
  ]

  return (
    <View style={styles.container}>
      {tabValue.map((v) => (
        <TouchableOpacityStyled
          key={v.tab}
          $focus={pathname === v.route}
          onPress={() => history.push(v.route)}
          activeOpacity={1}>
          <Icon
            name={v.iconName}
            color={pathname === v.route ? "rgb(0,175,175)" : "rgb(200,200,200)"}
            size={25}
          />
          <TextStyled $focus={pathname === v.route}>{v.text}</TextStyled>
        </TouchableOpacityStyled>
      ))}
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
