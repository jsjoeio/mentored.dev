import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_USER_LOGIN = gql`
  query GitHubUserLogin {
    me {
      github {
        avatarUrl
        login
        email
      }
    }
  }
`

const Username = () => (
  <Query query={GET_USER_LOGIN}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Uh oh, something went wrong!</div>

      return (
        <div>
          <h2 style={{ fontSize: '4vh' }}>{data.me.github.login}</h2>
        </div>
      )
    }}
  </Query>
)

export default Username
