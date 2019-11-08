module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://elm.cangdu.org/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}