const Router = require('koa-router')
const login = new Router()

login.get('/',async ctx=>{
 ctx.body = '我是登陆'
})
module.exports = login