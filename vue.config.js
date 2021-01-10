require("dotenv").config();
const hostname = require("os").hostname();

const baseURL = (() => {
  if (hostname.split('.')[1] === 'local') {
    return "http://localhost:8000";
  } else {
    return "https://my-page-3939.herokuapp.com";
  }
})();

module.exports = {
  devServer: {
    proxy: baseURL
  },
  publicPath: '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.csv$/,
          loader: "csv-loader",
        },
      ],
    },
  },
};