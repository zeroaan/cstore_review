import { gql } from "apollo-server"

const typeDefs = gql`
  type Query {
    foods: [Food]
  }
  type Food {
    id: ID!
    name: String!
    price: String!
    liked: Int!
  }
`

export default typeDefs
