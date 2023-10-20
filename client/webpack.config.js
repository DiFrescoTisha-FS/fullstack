const path = require('path');

module.exports = {
  entry: './src/app.js', // Update with your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory (create 'dist' folder)
    filename: 'bundle.js', // Output filename
  },
  module: {
    rules: [
      // ...Other rules

      // Rule for processing CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify")
    }
  },
  // Add any additional plugins or configurations as needed
};
