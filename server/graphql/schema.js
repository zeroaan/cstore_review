import { gql } from "apollo-server"

const typeDefs = gql`
  type Food {
    _id: ID!
    name: String!
    price: String!
    liked: Int!
  }
  type Query {
    foods: [Food]
    getFood(_id: ID!): Food
  }

  input FoodInput {
    name: String!
    price: String!
    liked: Int!
  }
  type Mutation {
    createFood(input: FoodInput): Food
    updateFood(_id: ID!, input: FoodInput): Food
  }
`

export default typeDefs
