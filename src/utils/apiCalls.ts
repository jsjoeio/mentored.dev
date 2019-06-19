import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'
import { isBrowser } from './functions'

const CHECK_FOR_REPO = gql`
  query CheckForRepo {
    me {
      github {
        repository(name: "mentored-dev") {
          id
        }
      }
    }
  }
`

export const GET_REPO_OWNER = gql`
  query GetRepoOwner {
    me {
      github {
        login
      }
    }
  }
`

export const CREATE_REPO = gql`
  mutation CreateRepo {
    gitHub {
      createRepositoryTemp(
        input: {
          repoName: "mentored-dev"
          description: "A repository created by mentored.dev to keep track of your progress 😎"
        }
      ) {
        repository {
          id
        }
      }
    }
  }
`

export function checkRepo(createRepoCallbackFn: () => void) {
  const { data, error, loading } = useQuery(CHECK_FOR_REPO)
  if (loading) return null
  if (error) console.error('Oops. Please try again.')
  if (data) {
    if (!data.me.github.repository) {
      console.log("mentored-dev repo does not yet exist in user's GitHub.")
      createRepoCallbackFn()
      return null
    } else {
      console.log('mentored-dev repo exists!')
      return data.me.github.repository
    }
  }
}

// Saving for later
// todo

export function makeGraphQLFetch(queryString) {
  const URL = process.env.GATSBY_OG_ENDPOINT
  const query = {
    query: queryString
  }

  let oneGraphObject = ''
  if (isBrowser()) {
    oneGraphObject =
      localStorage.getItem(`oneGraph:${process.env.GATSBY_OG_APP_ID}`) || ''
  }

  const token = JSON.parse(oneGraphObject).accessToken
  const options = {
    crossDomain: true,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  }

  fetch(URL, options)
    .then(res => res.json())
    .then(result => console.log('was it?', result))
}
