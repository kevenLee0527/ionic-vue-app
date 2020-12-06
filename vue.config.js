const path = require('path')
module.exports = {
  lintOnSave: false, // 关闭 eslint检查
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/theme/common.less")] // 引入全局样式变量
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/gqss': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        // ws: true,
        pathRewrite: {
          '^/gqss': 'gqss'   
        }
      }
    },
    before: app => { }
  }
};
