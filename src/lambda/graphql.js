// src/lambda/graphql.js
const { ApolloServer, gql } = require('apollo-server-lambda')
const { QUOTES } = require('../utils/quotes')

const typeDefs = gql`
  # This "Quote" type can be used in other type declarations.
  type Quote {
    quote: String
    id: ID
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    randomQuote: Quote
  }
`

const resolvers = {
  Query: {
    randomQuote: () => {
      // Get a random index
      const randomNumber = Math.floor(Math.random() * QUOTES.length)
      return QUOTES[randomNumber]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
