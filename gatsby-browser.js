import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import ApolloClient from 'apollo-boost'
import getAuth, { appId } from './src/utils/authentication'

const client = new ApolloClient({
  uri: `https://serve.onegraph.com/dynamic?app_id=${appId}`,
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
