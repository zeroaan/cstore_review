import React from "react"
import { NativeRouter, Switch, Route } from "react-router-native"

import Home from "~/pages/Home"
import Search from "~/pages/Search"
import FoodList from "~/pages/FoodList"
import Profile from "~/pages/Profile"
import NavBottom from "~/components/NavBottom"

const Routes = () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/foodlist" component={FoodList} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <NavBottom />
    </NativeRouter>
  )
}

export default Routes
