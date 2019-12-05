const merge = require("webpack-merge")
const commonConfig = require("./webpack.common")
const devConfig = require("./webpack.dev")
const prodConfig = require("./webpack.prod")
const i18nConfig = require("./webpack/webpack.i18n")

module.exports = mode => {
  // if (mode === "production") {
  //   return merge(commConfig, prodConfig, {
  //     mode
  //   })
  // }
  // return merge(commonConfig, {
  //   mode: "development", // "production" | "development" | "none"
  // })
  return commonConfig
}