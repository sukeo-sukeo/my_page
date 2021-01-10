require("dotenv").config();

module.exports = {
  devServer: {
    proxy: "http://localhost:8000",
  },
  publicPath: "/",
  outputDir: "docs",
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