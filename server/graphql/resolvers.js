import Food from "../models/food"

const resolvers = {
  Query: {
    foods: async () => {
      return await Food.find()
    },
  },
}

export default resolvers
