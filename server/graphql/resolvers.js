import Food from "../models/food"

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
  },
}

export default resolvers
