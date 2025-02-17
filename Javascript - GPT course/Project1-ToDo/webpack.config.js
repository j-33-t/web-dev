const path = require('path');

module.exports = {
  entry: './main.js', // entry point of your app
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // change to 'production' for production builds
  module: {
    rules: [
      // Add loaders if you need to process other files (e.g., CSS, images)
    ],
  },
};
