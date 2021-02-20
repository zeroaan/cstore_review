import * as types from "../actions/types"
import produce from "immer"

const initialState = {
  foods: null,
}

const foodReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_FOOD: {
        draft.foods = action.data
        break
      }
      default:
        break
    }
  })
}

export default foodReducer
