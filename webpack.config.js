const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'development',
  devtool: 'source-map',
  // Webpack dev server configuration
  devServer: {
    static: './dist',
    watchFiles: ['src/**/*'],
  },
  // Webpack entry point ( INPUT )
  entry: './src/js/index.js',
  // Webpack output configuration ( OUTPUT )
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Webpack file import resolve configuration
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [
      // When webpack encounters a .css files
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader"
        ],
      },
      // When webpack encounters a .sass|scss file ...
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Injects CSS to the DOM via JS (good in development)
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // When webpack encounters a .ts|tsx file
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // When webpack encounters a .js|jsx file...
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              // Convert new ES6 features to old ES5
              [
                "@babel/preset-env",
                // Enable usage of js async/awaits
                {
                  "useBuiltIns": "usage",
                  "corejs": 3,
                  "targets": "defaults"
                }
              ],
              // Convert JSX to normal JS
              // "@babel/preset-react"
            ],
          }
        }
      },
      // When webpack encounters a .pug file ...
      // {
      //   test: /\.pug$/,
      //   loader: '@webdiscus/pug-loader',
      // },
    ],
  },
  plugins: [
    // Copy 'src/public' folder contents to 'dist', to be served as static files
    new CopyPlugin({
      patterns: [
        { from: "src/public", to: "." },
      ],
    }),
    // Use "HTML Template" when building html files
    // Webpack injects the JS and CSS files into the HTML file
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'about-us.html',
    //   template: 'src/pages/about.html',
    // }),
  ],
  // The code that wrap the bundled code must be in which js version
  target: ['web', 'es5'],

};
