import mongoose from "mongoose"

const { Schema, model } = mongoose

const reviewSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  foodId: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
})

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  liked: {
    type: Number,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
  review: {
    type: [reviewSchema],
    required: true,
  },
})

export const Food = model("Food", foodSchema)
export const Review = model("Review", reviewSchema)
