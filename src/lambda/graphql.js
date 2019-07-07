// src/lambda/graphql.js
const { ApolloServer, gql } = require('apollo-server-lambda')

const QUOTES = [
  {
    quote: 'Today is your day to shine!',
    id: '1'
  },
  {
    quote: 'You can do this!',
    id: '2'
  },
  {
    quote: 'The best time to become a developer is today.',
    id: '3'
  }
]

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
  resolvers,
  playground: true
})

exports.handler = server.createHandler()
