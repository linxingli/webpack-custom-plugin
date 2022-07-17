// 1、创建一个构造函数
function WebpackPlugin1 (options) {
  this.options = options
}
// 2、重写构造函数原型的apply方法
WebpackPlugin1.prototype.apply = function (compiler) {
  // done
  // SyncHook
  // 编译(compilation)完成。
  // 参数：stats
  compiler.hooks.done.tap('WebpackPlugin1', () => {
    console.log(this.options.msg)
  })
}

// 3、导出该构造函数
module.exports = WebpackPlugin1