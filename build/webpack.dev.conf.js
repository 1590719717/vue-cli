'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//一个更友好的展示webpack错误提示的插件
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
//一个自动检索端口的包
const portfinder = require('portfinder')
//node的对象
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

//webpack配置分离
//这里要着重说一下webpack-merge这个包，这个包的作用是来合并两个配置文件对象并生成一个新的配置文件，有点儿类似于es6的Object.assign()方法。如果合并的过程中遇到冲突的属性，第二个参数的属性值会覆盖第一个参数的属性值
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    //quiet开启后(true)，除了初始启动信息之外的任何内容都不会被打印到控制台，即使是webpack 的错误或警告在控制台也不可见。不过我们用了'friendly-errors-webpack-plugin'插件，就可以设为true了。
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
  	//还记得之前说的生产环境和开发环境的变量在哪儿定义的吗？对，就是这里    
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    //模块热替换的插件，修改模块不需要刷新页面   
    new webpack.HotModuleReplacementPlugin(),
    //当使用HotModuleReplacementPlugin时，这个插件会显示模块正确的相对路径
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    //在编译出错时，使用NoEmitOnErrorsPlugin来跳过输出阶段，这样可以确保输出资源不会包含错误
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

//这里主要是做端口的检索以及npm run dev后对错误的处理，我们可以看这里使用了前面引入的'friendly-errors-webpack-plugin'插件
module.exports = new Promise((resolve, reject) => {
	//一个自动检索端口的包
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
