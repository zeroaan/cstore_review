import React from "react"
import { NativeRouter, Switch, Route } from "react-router-native"
import { gql, useQuery } from "@apollo/client"

import { FoodDataContext } from "~/context"

import Loading from "~/components/Loading"
import Home from "~/pages/Home"
import Search from "~/pages/Search"
import FoodList from "~/pages/FoodList"
import Profile from "~/pages/Profile"
import FoodDetail from "~/pages/FoodDetail"

const GET_FOODS = gql`
  query {
    foods {
      _id
      name
      fullName
      price
      image
      liked
      review {
        _id
        userid
        username
        date
        post
        star
      }
    }
  }
`

const Routes = () => {
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
          <Route path="/food/:foodId" component={FoodDetail} />
        </Switch>
      </NativeRouter>
    </FoodDataContext.Provider>
  )
}

export default Routes
