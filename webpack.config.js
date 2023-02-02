module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.js$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        test: /\.jsx$/,
        use: ["babel-loader", "@babel/preset-react"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
};
