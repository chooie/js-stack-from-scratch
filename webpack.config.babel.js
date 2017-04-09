// @flow
import path from "path";

import {WEBPACK_DEV_SERVER_PORT} from "./src/shared/config";
import { isProd } from "./src/shared/util";

const publicPath = isProd ?
      `/static/` : `http://localhost:${WEBPACK_DEV_SERVER_PORT}/dist/`;

export default {
  entry: [
    `./src/client`,
  ],
  output: {
    filename: `js/bundle.js`,
    path: path.resolve(__dirname, `dist`),
    publicPath: publicPath,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : `source-map`,
  resolve: {
    extensions: [`.js`, `.jsx`],
  },
  devServer: {
    port: WEBPACK_DEV_SERVER_PORT,
  },
};
