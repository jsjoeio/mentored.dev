import OneGraphAuth from 'onegraph-auth'

let auth

export const appId = process.env.GATSBY_OG_APP_ID

export default () => {
  // Prevents build from failing at runtime because window is not defined
  if (typeof window !== `undefined`) {
    if (!auth) {
      auth = new OneGraphAuth({
        appId
      })
    }
    return auth
  }
}
