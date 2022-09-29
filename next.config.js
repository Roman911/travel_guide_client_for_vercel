const serverIP = 'https://tg-server-herocu.herokuapp.com'
const localhostIP = 'http://localhost:3005'
const dev = true
const IP = dev ? localhostIP : serverIP

module.exports = {
  images: {
    loader: 'imgix',
    path: `${IP}/images/`,
  },
  env: {
    GRAPHQL_URI: `${IP}/graphql`,
    STATIC_IMAGES: `${IP}/images/`,
    NEXT_APP_HOST_API: `${IP}/`,
  },
}
