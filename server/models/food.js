import mongoose from "mongoose"

const { Schema, model } = mongoose

const foodSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  liked: {
    type: Number,
    required: true,
  },
})

export default model("Food", foodSchema)
