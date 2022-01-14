const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin').default;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');

require('dotenv').config();

const tsConfigPath = path.resolve(__dirname, './tsconfig.webpack.json');

module.exports = {
  entry: './src/client/index.tsx',
  mode: process.env.NODE_ENV,
  devServer: {
    static: {
      directory: `./build/`,
    },
    historyApiFallback: {
      rewrites: [{ from: /./, to: './client/index.html' }],
    },
    compress: true,
    port: 1337,
    host: 'localhost',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              configFile: tsConfigPath,
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules\/(?!middleware-axios).*/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: `web_developer__[name]__[local]`,
              },
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new MiniCSSExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template.ejs',
      title: `Web Developer Life`,
      containerId: 'root',
      favicon: './src/client/images/favicon.png',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: tsConfigPath,
      },
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
