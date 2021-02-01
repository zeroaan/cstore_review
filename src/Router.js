import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/MaterialIcons"

import Home from "~/components/Home"
import Search from "~/components/Search"
import StoreInform from "~/components/StoreInform"
import Profile from "~/components/Profile"

const Tabs = createBottomTabNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName
            if (route.name === "홈") {
              iconName = focused ? "home" : "home"
            } else if (route.name === "검색") {
              iconName = focused ? "search" : "search"
            } else if (route.name === "상품정보") {
              iconName = focused ? "apps" : "apps"
            } else if (route.name === "내정보") {
              iconName = focused ? "person" : "person"
            }
            return <Icon name={iconName} color={color} size={30} />
          },
        })}
        tabBarOptions={{
          activeTintColor: "rgb(0, 175, 175)",
          inactiveTintColor: "rgb(200,200,200)",
          style: {
            height: 60,
            paddingBottom: 5,
          },
        }}>
        <Tabs.Screen name="홈" component={Home} />
        <Tabs.Screen name="검색" component={Search} />
        <Tabs.Screen name="상품정보" component={StoreInform} />
        <Tabs.Screen name="내정보" component={Profile} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
