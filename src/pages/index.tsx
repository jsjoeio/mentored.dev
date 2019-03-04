import * as React from 'react'
import Link from 'gatsby-link'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Index = (props : IndexPageProps) => (
  <div>
    <h1>Hi people</h1>
    <p>
      Welcome to your new{' '}
      <strong>{props.data.site.siteMetadata.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
