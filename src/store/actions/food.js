import * as types from "./types"

export const addFood = (data) => {
  const bestStarFoods = [...data].sort(function (a, b) {
    let sumA = 0,
      sumB = 0,
      resultA,
      resultB
    a.review.map((v) => (sumA += v.star))
    b.review.map((v) => (sumB += v.star))
    a.review.length === 0 ? (resultA = 0) : (resultA = sumA / a.review.length)
    b.review.length === 0 ? (resultB = 0) : (resultB = sumB / b.review.length)
    return resultB - resultA
  })
  const bestLikedFoods = [...data].sort(function (a, b) {
    return b.liked.length - a.liked.length
  })
  const bestReviewFoods = [...data].sort(function (a, b) {
    return b.review.length - a.review.length
  })

  return {
    type: types.ADD_FOOD,
    data,
    bestStarFoods,
    bestLikedFoods,
    bestReviewFoods,
  }
}
