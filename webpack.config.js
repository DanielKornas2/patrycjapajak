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
      id: "xinaliq",
      pageTitle: data.xinaliq.pageTitle,
      projectTitle: data.xinaliq.projectTitle,
      projectDescription: data.xinaliq.projectDescription,
      mainImage: data.xinaliq.mainImage,
      filename: 'xinaliq.html',
      template: './src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "toniemy1",
      id: "toniemy1",
      pageTitle: data.toniemy1.pageTitle,
      projectTitle: data.toniemy1.projectTitle,
      projectDescription: data.toniemy1.projectDescription,
      mainImage: data.toniemy1.mainImage,
      filename: 'to-nie-my-i.html',
      template: './src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "toniemy2",
      id: "toniemy2",
      pageTitle: data.toniemy2.pageTitle,
      projectTitle: data.toniemy2.projectTitle,
      projectDescription: data.toniemy2.projectDescription,
      mainImage: data.toniemy2.mainImage,
      filename: 'to-nie-my-ii.html',
      template: './src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "tesknota",
      id: "tesknota",
      pageTitle: data.tesknota.pageTitle,
      projectTitle: data.tesknota.projectTitle,
      mainImage: data.tesknota.mainImage,
      filename: 'tesknota.html',
      template: './src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "without-img",
      id: "dom",
      pageTitle: data.dom.pageTitle,
      projectDescription: data.dom.projectDescription,
      filename: 'dom.html',
      template: './src/template-withoutimg.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "silesiana",
      id: "silesiana",
      pageTitle: data.silesiana.pageTitle,
      projectTitle: data.silesiana.projectTitle,
      projectDescription: data.silesiana.projectDescription,
      mainImage: data.silesiana.mainImage,
      filename: 'silesiana.html',
      template: './src/template.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "without-img",
      id: "kontakt",
      pageTitle: data.contact.pageTitle,
      projectDescription: data.contact.projectDescription,
      filename: 'kontakt.html',
      template: './src/template-withoutimg.ejs'
    }),
    new HtmlWebpackPlugin({
      className: "without-img",
      id: "bio",
      pageTitle: data.bio.pageTitle,
      projectDescription: data.bio.projectDescription,
      filename: 'bio.html',
      template: './src/template-withoutimg.ejs'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}