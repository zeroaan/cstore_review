import * as types from "../actions/types"
import produce from "immer"

const initialState = {
  foods: null,
  starFoods: null,
  likedFoods: null,
  reviewFoods: null,
}

const foodReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_FOOD: {
        draft.foods = action.data
        draft.starFoods = action.star
        draft.likedFoods = action.liked
        draft.reviewFoods = action.review
        break
      }
      default:
        break
    }
  })
}

export default foodReducer
