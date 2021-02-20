import React, { useEffect } from "react"
import { NativeRouter, Switch, Route } from "react-router-native"
import { useDispatch } from "react-redux"
import { gql, useQuery } from "@apollo/client"

import { addFood } from "~/store/actions/food"

import Loading from "~/components/Loading"
import Home from "~/pages/Home"
import Search from "~/pages/Search"
import FoodList from "~/pages/FoodList"
import Profile from "~/pages/Profile"
import FoodDetail from "~/pages/FoodDetail"
import FoodReview from "~/pages/FoodReview"
import Login from "~/pages/Login"
import Signup from "~/pages/Signup"

const GET_FOODS = gql`
  query {
    foods {
      _id
      name
      fullName
      price
      image
      liked
      sumStar
      category
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
  const dispatch = useDispatch()

  const { loading, data } = useQuery(GET_FOODS)

  useEffect(() => {
    data && dispatch(addFood(data.foods))
  }, [loading])

  if (loading) {
    return <Loading />
  }
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/foodlist" component={FoodList} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/food/review/:foodId" component={FoodReview} />
        <Route path="/food/:foodId" component={FoodDetail} />
      </Switch>
    </NativeRouter>
  )
}

export default Routes
