import { gql } from "apollo-server"

const typeDefs = gql`
  type Review {
    id: ID!
    foodId: ID!
    nickname: String!
    date: String!
    post: String!
  }
  type Food {
    _id: ID!
    name: String!
    fullName: String!
    price: String!
    image: String!
    liked: Int!
    star: Float!
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
    star: Float! = 0.0
  }
  input UpdateFoodInput {
    name: String
    fullName: String
    price: String
    image: String
    liked: Int
    star: Float
  }
  input CreateReviewInput {
    id: ID!
    foodId: ID!
    nickname: String!
    date: String!
    post: String!
  }
  input UpdateReviewInput {
    id: ID
    foodId: ID
    nickname: String
    date: String
    post: String
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
