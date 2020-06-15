const path = require('path');
module.exports = {
  stories: [
    '../stories/**/*.stories.js',
    '../stories/**/*.stories.ts',
    '../stories/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader')
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
