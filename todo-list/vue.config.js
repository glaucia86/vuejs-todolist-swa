const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],
  lintOnSave: false, // Desativa as checagens estritas do ESLint no build/serve
  configureWebpack: config => {
    config.plugins = config.plugins.filter(
      plugin => plugin.constructor.name !== 'ProgressPlugin'
    )
  }
})