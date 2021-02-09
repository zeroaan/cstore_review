import React, { useEffect } from "react"
import { BackHandler, Alert } from "react-native"
import { NativeRouter, Switch, Route } from "react-router-native"
import { gql, useQuery } from "@apollo/client"

import { FoodDataContext } from "~/context"

import Loading from "~/components/Loading"
import Home from "~/pages/Home"
import Search from "~/pages/Search"
import FoodList from "~/pages/FoodList"
import Profile from "~/pages/Profile"
import NavBottom from "~/components/NavBottom"

const GET_FOODS = gql`
  query {
    foods {
      _id
      name
      price
      image
      liked
      review {
        star
      }
    }
  }
`

const Routes = () => {
  const backAction = () => {
    Alert.alert("", "편리를 종료하시겠습니까?", [
      { text: "취소", onPress: () => null },
      { text: "종료", onPress: () => BackHandler.exitApp() },
    ])
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction)
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction)
  }, [])

  const { loading, data } = useQuery(GET_FOODS)

  if (loading) {
    return <Loading />
  }

  return (
    <FoodDataContext.Provider value={data}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/foodlist" component={FoodList} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <NavBottom />
      </NativeRouter>
    </FoodDataContext.Provider>
  )
}

export default Routes
