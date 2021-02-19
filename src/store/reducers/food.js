import * as types from "../actions/types"
import produce from "immer"

const initialState = {
  foods: null,
  bestStarFoods: null,
  bestLikedFoods: null,
  bestReviewFoods: null,
}

const foodReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_FOOD: {
        draft.foods = action.data
        draft.bestStarFoods = action.bestStarFoods
        draft.bestLikedFoods = action.bestLikedFoods
        draft.bestReviewFoods = action.bestReviewFoods
        break
      }
      default:
        break
    }
  })
}

export default foodReducer
