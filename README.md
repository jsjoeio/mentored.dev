<br />
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
<p align="center">
  <a href="https://mentored.dev">
    <img src="https://res.cloudinary.com/dobfxs62e/image/upload/v1560467950/mentored.dev/icon-book.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">mentored.dev</h3>

  <p align="center">
    A gamified learning platform to help you become a web developer.
    <br />
    <br />
    ·
    <a href="https://mentored.dev">Visit</a>
    ·
    <a href="https://twitter.com/jsjoeio">Get in touch</a>
    .
    <a href="https://github.com/jsjoeio/mentored.dev/issues">Report Bug</a>
    ·
  </p>
</p>

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

Currently, there are no tests :scream: but there will be in the future!

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

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

This project wouldn't be possible without these people and organizations

- [Gatsby](https://gatsby.org)
- [OneGraph](https://www.onegraph.com/)
- [@TejasQ](https://github.com/TejasQ)
- [Eric Matyas](https://www.soundimage.org) for music

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://maxcell.me"><img src="https://avatars1.githubusercontent.com/u/8431042?v=4" width="100px;" alt="Prince Wilson"/><br /><sub><b>Prince Wilson</b></sub></a><br /><a href="https://github.com/jsjoeio/mentored.dev/issues?q=author%3Amaxcell" title="Bug reports">🐛</a></td><td align="center"><a href="https://bolajiayodeji.com"><img src="https://avatars2.githubusercontent.com/u/30334776?v=4" width="100px;" alt="Bolaji Ayodeji"/><br /><sub><b>Bolaji Ayodeji</b></sub></a><br /><a href="https://github.com/jsjoeio/mentored.dev/issues?q=author%3ABolajiAyodeji" title="Bug reports">🐛</a></td><td align="center"><a href="https://github.com/andregce"><img src="https://avatars1.githubusercontent.com/u/25963571?v=4" width="100px;" alt="Andre Goncalves"/><br /><sub><b>Andre Goncalves</b></sub></a><br /><a href="https://github.com/jsjoeio/mentored.dev/issues?q=author%3Aandregce" title="Bug reports">🐛</a></td><td align="center"><a href="http://angiejones.tech"><img src="https://avatars0.githubusercontent.com/u/15972783?v=4" width="100px;" alt="Angie Jones"/><br /><sub><b>Angie Jones</b></sub></a><br /><a href="https://github.com/jsjoeio/mentored.dev/issues?q=author%3Aangiejones" title="Bug reports">🐛</a></td><td align="center"><a href="https://jakeriordan.dev"><img src="https://avatars3.githubusercontent.com/u/38506433?v=4" width="100px;" alt="Jake Riordan"/><br /><sub><b>Jake Riordan</b></sub></a><br /><a href="https://github.com/jsjoeio/mentored.dev/issues?q=author%3AHazetheai" title="Bug reports">🐛</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!