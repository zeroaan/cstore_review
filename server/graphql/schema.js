import { gql } from "apollo-server"

const typeDefs = gql`
  type Review {
    id: ID!
    nickname: String!
    date: String!
    post: String!
    star: Float!
  }
  type Food {
    _id: ID!
    name: String!
    fullName: String!
    price: String!
    image: String!
    liked: Int!
    review: [Review]!
  }
  type Query {
    foods: [Food]
    getFood(_id: ID!): Food
  }

  input ReviewInput {
    id: ID
    foodId: ID
    nickname: String
    date: String
    post: String
    star: Float
  }
  input CreateFoodInput {
    name: String!
    fullName: String!
    price: String!
    image: String!
    liked: Int! = 0
    review: [ReviewInput]! = []
  }
  input UpdateFoodInput {
    name: String
    fullName: String
    price: String
    image: String
    liked: Int
    review: [ReviewInput]
  }
  type Mutation {
    createFood(input: CreateFoodInput): Food
    updateFood(_id: ID!, input: UpdateFoodInput): Food
    deleteFood(_id: ID!): Food
  }
`

export default typeDefs
