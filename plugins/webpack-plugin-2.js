// 1、创建一个构造函数
function WebpackPlugin2 (options) {
  this.options = options
}
// 2、重写构造函数原型的apply方法
WebpackPlugin2.prototype.apply = function (compiler) {
  // compile
  // SyncHook
  // 一个新的编译(compilation)创建之后，钩入(hook into) compiler。
  // 参数：compilationParams
  compiler.hooks.compile.tap('WebpackPlugin2', () => {
    console.log('compile')
  })

  // compilation
  // SyncHook
  // 编译(compilation)创建之后，执行插件。
  // 参数：compilation
  compiler.hooks.compilation.tap('WebpackPlugin2', (compilation) => {
    console.log('compilation') // 有多少个chunk就打印多少次

    // chunkAsset
    // SyncHook
    // 一个 chunk 中的一个资源被添加到编译中。
    // 参数：chunk filename
    compilation.hooks.chunkAsset.tap('WebpackPlugin2', (chunk, filename) => {
      console.log('chunk', chunk)
      console.log('filename', filename)
    })
  })
}

// 3、导出该构造函数
module.exports = WebpackPlugin2


// Compiler对象包含了 Webpack 环境所有的的配置信息，包含 options，hook，loaders，plugins 这些信息，
// 这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例

// Compilation对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，
// 每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。
// 通过 Compilation 也能读取到 Compiler 对象。