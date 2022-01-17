const Router = require('koa-router')
const student = new Router()
student.get('/',async (ctx)=>{
    ctx.body = 'I m manage'
})

module.exports = student