import { gql } from "apollo-server"

const typeDefs = gql`
  type Review {
    id: ID!
    foodId: ID!
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
  }
  type Query {
    foods: [Food]
    getFood(_id: ID!): Food
    getReviews(foodId: ID!): [Review]
  }

  input CreateFoodInput {
    name: String!
    fullName: String!
    price: String!
    image: String!
    liked: Int! = 0
  }
  input UpdateFoodInput {
    name: String
    fullName: String
    price: String
    image: String
    liked: Int
  }
  input CreateReviewInput {
    id: ID!
    foodId: ID!
    nickname: String!
    date: String!
    post: String!
    star: Float!
  }
  input UpdateReviewInput {
    id: ID
    foodId: ID
    nickname: String
    date: String
    post: String
    star: Float
  }
  type Mutation {
    createFood(input: CreateFoodInput): Food
    updateFood(_id: ID!, input: UpdateFoodInput): Food
    deleteFood(_id: ID!): Food
    createReview(input: CreateReviewInput): Review
    updateReview(id: ID!, input: UpdateReviewInput): Review
    deleteReview(id: ID!): Review
  }
`

export default typeDefs
