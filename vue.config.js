module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Dashboard/'
      : '/',
  devServer: {
      port: 8081,
      https: true
  }
}