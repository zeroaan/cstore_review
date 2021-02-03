import Food from "../models/food"

const resolvers = {
  Query: {
    foods: async () => {
      return await Food.find()
    },
  },
  Mutation: {
    createFood: async (_, { input }) => {
      return await Food.create(input)
    },
  },
}

export default resolvers
