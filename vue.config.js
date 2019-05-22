// const path = require('path')
// const utils = {
//   assetsPath: function (_path) {
//     const assetsSubDirectory = process.env.NODE_ENV === 'production'
//       // 生产环境下的 static 路径
//       ? 'static'
//       // 开发环境下的 static 路径
//       : 'static'

//     return path.posix.join(assetsSubDirectory, _path)
//   },
//   resolve: function (dir) {
//     return path.join(__dirname, '..', dir)
//   }
// }
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/self-resume/' : ''
}