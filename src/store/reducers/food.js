import * as types from "../actions/types"

const initialState = {
  foods: null,
}

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FOOD: {
      const bestStarFoods = [...action.data].sort(function (a, b) {
        let sumA = 0,
          sumB = 0,
          resultA,
          resultB
        a.review.map((v) => (sumA += v.star))
        b.review.map((v) => (sumB += v.star))
        a.review.length === 0
          ? (resultA = 0)
          : (resultA = sumA / a.review.length)
        b.review.length === 0
          ? (resultB = 0)
          : (resultB = sumB / b.review.length)
        return resultB - resultA
      })
      const bestLikedFoods = [...action.data].sort(function (a, b) {
        return b.liked.length - a.liked.length
      })
      const bestReviewFoods = [...action.data].sort(function (a, b) {
        return b.review.length - a.review.length
      })

      return {
        ...state,
        foods: action.data,
        bestStarFoods: bestStarFoods,
        bestLikedFoods: bestLikedFoods,
        bestReviewFoods: bestReviewFoods,
      }
    }
    default:
      return state
  }
}

export default foodReducer
