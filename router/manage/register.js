const Router = require('koa-router')
const register = new Router()

register.get('/',async ctx=>{
 ctx.body = '我是登陆'
})
module.exports = register 