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
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/gqss': {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        secure: false,
        // ws: true,
        pathRewrite: {
          '^/gqss': 'gqss'   // 请求数据路径别名,这里是注意将static/mock放入public文件夹
        }
      }
    },
    before: app => { }
  }
};
