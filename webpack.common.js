const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsLoadingRules = {
  test: /\.(ts|js)(x?)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const cssLoadingRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const sassLoadingRules = {
  test: /\.mod\.scss$/,
  use: [
    'style-loader',
    {
      loader: '@teamsupercell/typings-for-css-modules-loader',
      options: {
        formatter: 'prettier',
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[local]__[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
};

const imageLoadingRules = {
  test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
  type: 'asset/resource',
};

const fontLoadingRules = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
};

const webConfig = {
  entry: 'src/index.tsx',
  // options related to how webpack emits results
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // options for resolving module requests
  resolve: {
    // directories where to look for modules, in order
    modules: [path.resolve(__dirname), 'src', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  // configuration regarding modules
  module: {
    rules: [
      jsLoadingRules,
      cssLoadingRules,
      sassLoadingRules,
      imageLoadingRules,
      fontLoadingRules,
    ],
  },
  devServer: {
    // falls back to index.html when route is not found, allowing client side router to handle URL change
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};

module.exports = webConfig;
