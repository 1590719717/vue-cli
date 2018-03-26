'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//导出另一个对象，属性为当前的node环境，值为“development”（开发环境）
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
