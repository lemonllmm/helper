const Router= require('koa-router')
const router = new Router()
const lost = require('./lost')
const  like = require('./like')
const fish = require('./fish')
const news = require('./news')
const user = require('./user')

router.get("/", async (ctx)=>{
    ctx.body = '我是App端'
})
router.use('/lost',lost.routes(),lost.allowedMethods())
router.use('/fish',fish.routes(),fish.allowedMethods())
router.use('/news',news.routes(),news.allowedMethods())
router.use('/like',like.routes(),like.allowedMethods())
router.use('/user',user.routes(),user.allowedMethods())

module.exports = router