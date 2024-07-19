/* module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'], // adjust according to your path
}; */
//try moving exports
module.exports = {
    project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
  assets: ['./assets/fonts'], // adjust according to your path
};
