import { useQuery } from 'react-apollo-hooks'
import { gql } from 'apollo-boost'

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

export function checkRepo() {
  const { data, error, loading } = useQuery(CHECK_FOR_REPO)
  if (loading) return null
  if (error) console.error('Oops. Please try again.')
  if (data) {
    if (!data.me.github.repository) {
      console.log("mentored-dev repo does not yet exist in user's GitHub.")
    } else {
      console.log('mentored-dev repo exists!')
    }
  }
}
