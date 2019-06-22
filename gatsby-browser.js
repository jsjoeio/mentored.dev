import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import getAuth from './src/utils/authentication'

const client = new ApolloClient({
  uri: process.env.GATSBY_OG_ENDPOINT,
  request: operation =>
    operation.setContext({ headers: getAuth().authHeaders() })
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>{element}</ApolloHooksProvider>
    </ApolloProvider>
  )
}
