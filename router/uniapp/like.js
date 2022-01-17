const Router = require('koa-router')
const like = new Router()

like.get('/',async (ctx)=>{
    ctx.body='I like you '
})
module.exports = like