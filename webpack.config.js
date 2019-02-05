const HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const data = require('./src/data.json');

// exportuje dwa pliki js, które mają być przerabiane przez webpacka - jeden z gotowym pluginem, drugi moj
module.exports = {
  entry: ['./src/js/pure-swipe.js', './src/js/main.js'],
  output: {
    path: __dirname + '/dist',
    // Webpack robi mi bundla o nazwie ponizej w folderze dist
    filename: 'bundle_main.js'
  },

  // Dodałem moduł html loader zeby robic partiale w html i łatwiej zarządzać contentem
  module: {
    rules: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  // Definiuje sobie podstrony korzystajac z HtmlWebpackPlugin i customowych parametrow, m.in danych w z jsona
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template-homepage.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "xinaliq",
      pageTitle: data.xinaliq.pageTitle,
      projectTitle: data.xinaliq.pageTitle,
      projectDescription: data.xinaliq.projectDescription,
      mainImage: data.xinaliq.mainImage,
      filename: 'xinaliq.html',
      template: './src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "contact",
      pageTitle: data.contact.pageTitle,
      projectDescription: data.contact.projectDescription,
      filename: 'kontakt.html',
      template: './src/template-withoutimg.ejs'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}