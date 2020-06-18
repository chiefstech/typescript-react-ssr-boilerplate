const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('./config/webpack.config');

const config = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@client': path.resolve('src/client'),
      '@server': path.resolve('src/server'),
      '@common': path.resolve('src/common')
    },
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['src', 'node_modules']
  }
};

const clientConfig = {
  ...config,
  ...{
    module: webpackConfig.module,
    devtool: webpackConfig.devtool
  }
};

const client = Object.assign({}, clientConfig, {
  name: 'client',
  target: 'web',
  entry: path.resolve(__dirname, 'src/client/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
});

const server = Object.assign({}, config, {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/server/index.tsx'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  }
});

module.exports = [client, server];
