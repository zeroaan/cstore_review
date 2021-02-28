import * as types from "./types"

export const addFood = (data) => {
  const bestStarFoods = [...data].sort((a, b) => {
    let sumA = 0,
      sumB = 0,
      resultA = 0,
      resultB = 0
    a.review.map((v) => (sumA += v.star))
    b.review.map((v) => (sumB += v.star))
    a.review.length !== 0 && (resultA = sumA / a.review.length)
    b.review.length !== 0 && (resultB = sumB / b.review.length)
    return resultB + b.liked.length * 0.01 - (resultA + a.liked.length * 0.01)
  })
  const bestLikedFoods = [...data].sort((a, b) => {
    return b.liked.length - a.liked.length
  })
  const bestReviewFoods = [...data].sort((a, b) => {
    return b.review.length - a.review.length
  })

  return {
    type: types.ADD_FOOD,
    data,
    star: bestStarFoods,
    liked: bestLikedFoods,
    review: bestReviewFoods,
  }
}
