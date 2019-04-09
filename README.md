# mentored.dev

A gamified learning platform to help you become a web developer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project uses [`yarn`](https://yarnpkg.com/en/) instead of `npm`. You can install it with Homebrew like so:

```
brew install yarn
```

### Installing

After you've cloned the repo, running the following steps:

```
yarn
```

And then to start the project locally:

```
yarn dev
```

Then in your browser, navigate to [http:localhost:8000/](http:localhost:8000/).

## Running the tests

TODO

- [ ] Add Jest for unit testing
- [ ] Add Cypress for integration/end-to-end testing

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

CICD is currently set up with [Netlify](https://www.netlify.com/). When you submit a PR, Netlify App will deploy a preview and add a link in the PR. You should always PR into the `staging` branch which is our QA environment. Once it's approved, Netlify will deploy it to [staging.mentored.dev](https://staging.mentored.dev).

When a new version is ready, you can submit a new PR to merge `staging` into `master`. This will deploy to the main URL for the app [mentored.dev](https://mentored.dev)

## Built With

- [gatsby.js](https://www.gatsbyjs.org/) - The React web framework used
- [TypeScript](https://www.typescriptlang.org/) - "JavaScript that scales"
- [ApolloClient](https://www.apollographql.com/) - GraphQL client
- [OneGraph](https://www.onegraph.com/) - Used to integrate with GitHub OAuth
- [styled-components](https://www.styled-components.com/) - CSS-in-JS solution

## Contributing

Not currently open to contributors but check back in the future!

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jsjoeio/mentored.dev/tags).

## License

TODO

- [ ] Add MIT License

## Acknowledgments

TODO

- [ ] Add acknowledgements (Tejas, OneGraph team, Gatsby)
- Music by [Eric Matyas](www.soundimage.org)
  <!-- * Hat tip to anyone who's code was used -->
