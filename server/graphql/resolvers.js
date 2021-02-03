import { Food, Review } from "../models/food"

const resolvers = {
  Query: {
    foods: async () => {
      return await Food.find()
    },
    getFood: async (_, { _id }) => {
      return await Food.findById(_id)
    },
    getReviews: async (_, { foodId }) => {
      return await Review.findById(foodId)
    },
  },
  Mutation: {
    createFood: async (_, { input }) => {
      return await Food.create(input)
    },
    updateFood: async (_, { _id, input }) => {
      return await Food.findOneAndUpdate({ _id }, input, { new: true })
    },
    deleteFood: async (_, { _id }) => {
      return await Food.findOneAndDelete({ _id })
    },
    createReview: async (_, { input }) => {
      return await Review.create(input)
    },
    updateReview: async (_, { _id, input }) => {
      return await Review.findOneAndUpdate({ id }, input, { new: true })
    },
    deleteReview: async (_, { _id }) => {
      return await Review.findOneAndDelete({ id })
    },
  },
}

export default resolvers
