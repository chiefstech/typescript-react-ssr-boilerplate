const webpack = require('webpack');
const [client, server] = require('../config/webpack/webpack.config');

const { NODE_ENV } = process.env;
const compiler = webpack([client(NODE_ENV), server(NODE_ENV)]);

if (NODE_ENV === 'development') {
  console.log('👷‍♂️ Running in development mode 🙌');
  compiler.watch({}, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      })
    );
  });
} else {
  console.log('🎬 Cutting a build: production mode 🙌');
  compiler.run((err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      })
    );
  });
}
