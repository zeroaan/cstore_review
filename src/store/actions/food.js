import * as types from "./types"

export const addFood = (data) => {
  return {
    type: types.ADD_FOOD,
    data,
  }
}
