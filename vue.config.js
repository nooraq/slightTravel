// eslint-disable-next-line
const px2rem = require('postcss-px2rem');

const path = require('path');

const { env: { BASE_URL }, VUE_CLI_SERVICE: { mode } } = process;
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 修改为相对路径
  devServer: {
    publicPath: BASE_URL,
    proxy: {
      '/api': {
        target: 'http://175.24.28.193:8080',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    overlay: {
      errors: true
    },
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],

  chainWebpack: config => (
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('variable', resolve('src/theme/variable.scss'))
  ),
  css: {
    loaderOptions: {
      postcss: {
        // 基准大小 baseSize，需要和rem.js中相同
        // 1rem=remUnit*px
        plugins: [px2rem({ remUnit: 100 })]
      }
    }
  },
  productionSourceMap: mode !== 'production',
};
