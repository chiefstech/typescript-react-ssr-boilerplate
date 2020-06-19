const path = require('path');
module.exports = {
  stories: [
    '../stories/**/*.stories.js',
    '../stories/**/*.stories.ts',
    '../stories/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.forEach((rule) => {
      if (rule.test.toString() === /\.jsx?$/.toString()) {
        rule.use.forEach((use) => {
          if (use.loader && use.loader.includes('babel-loader')) {
            const babelLoader = use;
            use.loader = 'babel-loader';
            use.options = {
              presets: ['@babel/preset-env', '@babel/preset-react']
            };
            console.log({ babelLoader });
          }
        });
      }
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            silent: true,
            transpileOnly: true,
            happyPackMode: true
          }
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      ]
    });
    config.devtool = 'eval-cheap-module-source-map';
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@client': path.resolve('src/client'),
      '@server': path.resolve('src/server'),
      '@common': path.resolve('src/common')
    };
    return config;
  }
};
