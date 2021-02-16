import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://cstore-server.herokuapp.com/",
})

export default client
