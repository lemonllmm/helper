const Router= require('koa-router')
const router = new Router()
const lost = require('./lost')
const  like = require('./like')
const fish = require('./fish')
const school = require('./school')

router.get("/", async (ctx)=>{
    ctx.body = '我是App端'
})
router.use('/lost',lost.routes(),lost.allowedMethods())
router.use('/fish',fish.routes(),fish.allowedMethods())
router.use('/school',school.routes(),school.allowedMethods())
router.use('/like',like.routes(),like.allowedMethods())

module.exports = router