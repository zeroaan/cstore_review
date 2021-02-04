import { Food } from "../models/food"

const resolvers = {
  Query: {
    foods: async () => {
      return await Food.find()
    },
    getFood: async (_, { _id }) => {
      return await Food.findById(_id)
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
    createReview: async (_, { _id, input }) => {
      return await Food.findOneAndUpdate(
        { _id },
        { $push: input },
        { new: true },
      )
    },
  },
}

export default resolvers
