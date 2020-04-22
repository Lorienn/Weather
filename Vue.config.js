module.exports = {
  devServer: {
    proxy: {
      '/simpleWeather': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true
      },
      '/toutiao': {
        target: 'http://v.juhe.cn',
        changeOrigin: true
      },
      '/weather': {
        target: 'http://localhost:80/',
        changeOrigin: true
      }
    }
  }
}
