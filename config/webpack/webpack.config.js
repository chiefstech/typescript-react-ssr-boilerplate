const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

var config = (target, webpackEnv) => {
  console.log({ target, webpackEnv });
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: isEnvDevelopment ? 'eval-cheap-module-source-map' : '',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
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
};

var client = (webpackEnv) =>
  Object.assign({}, config('client-webpack', webpackEnv), {
    name: 'client',
    target: 'web',
    entry: path.resolve(__dirname, '../../src/client/index.tsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../../build')
    }
  });

var server = (webpackEnv) =>
  Object.assign({}, config('server-webpack', webpackEnv), {
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, '../../src/server/index.tsx'),
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, '../../build')
    }
  });

module.exports = [client, server];
