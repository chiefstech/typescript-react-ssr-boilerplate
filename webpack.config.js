const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

var config = {
    mode: "development",
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@client': path.resolve('src/client'),
  '@client_shared': path.resolve('src/client/_shared'),
  '@client-admin': path.resolve('src/client/admin'),
  '@client-agent': path.resolve('src/client/agent'),
  '@client-car': path.resolve('src/client/car'),
  '@client-cruise': path.resolve('src/client/cruise'),
  '@client-flight': path.resolve('src/client/flight'),
  '@client-hotel': path.resolve('src/client/hotel'),
  '@client-tour': path.resolve('src/client/tour'),
  '@client-monthlydeals': path.resolve('src/client/monthlydeals'),
  '@client-webservices': path.resolve('src/client/webservices'),
  '@client-vacation': path.resolve('src/client/vacation'),
  '@client-prepackaged': path.resolve('src/client/prepackaged'),
  '@client-cart': path.resolve('src/client/cart'),
  '@server': path.resolve('src/server'),
  '@views': path.resolve('src/server/views'),
  '@view-elements': path.resolve('src/server/views/elements')
        },
        extensions: [".tsx", ".ts", ".js"],
        modules: ["src", "node_modules"]
    }
};

var client = Object.assign({}, config, {
    name: "client",
    target: "web",
    entry: path.resolve(__dirname, "src/client/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    }
});

var server = Object.assign({}, config, {
    name: "server",
    target: "node",
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, "src/server/index.tsx"),
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "build")
    }
});

module.exports = [client, server];
