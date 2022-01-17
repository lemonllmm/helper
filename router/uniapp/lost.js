const Router= require('koa-router')
const lost = new Router()

lost.get('/',async (ctx)=>{
    ctx.body = 'Im lost'
})

module.exports=lost