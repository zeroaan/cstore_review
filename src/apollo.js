import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://192.168.149.145:4000/",
})

export default client
