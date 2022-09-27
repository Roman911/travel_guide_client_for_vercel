const serverIP = '34.134.35.180:3005'
const localhostIP = 'localhost:3005'
const dev = true
const IP = dev ? localhostIP : serverIP

module.exports = {
  images: {
    loader: 'imgix',
    path: `http://${IP}/images/`,
  },
  env: {
    GOOGLE_MAPS_KAY: 'AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8',
    GRAPHQL_URI: `http://${IP}/graphql`,
    STATIC_IMAGES: `http://${IP}/images/`,
    NEXT_APP_MAPBOX_TOKEN:
      'pk.eyJ1Ijoicm9tYW45MTEiLCJhIjoiY2w2ZGp5NHM0MDB5cTNqcDRtYWcwNm1ueiJ9.LqCkF2MnGko-67O7mRDSlQ',
    NEXT_APP_HOST_API: `http://${IP}/`,
  },
}

//'AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8&region=UA&language=uk'
