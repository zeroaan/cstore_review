import { combineReducers } from "redux"
import food from "./food"
import user from "./user"

const rootReducer = combineReducers({
  food,
  user,
})

export default rootReducer
