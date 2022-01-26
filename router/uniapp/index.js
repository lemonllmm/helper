const Router= require('koa-router')
const router = new Router()
const lost = require('./lost')
const  love = require('./love')
const fish = require('./fish')
const news = require('./news')
const user = require('./user')
const course = require("./course")

router.get("/", async (ctx)=>{
    ctx.body = '我是App端'
})
router.use('/lost',lost.routes(),lost.allowedMethods())
router.use('/fish',fish.routes(),fish.allowedMethods())
router.use('/news',news.routes(),news.allowedMethods())
router.use('/love',love.routes(),love.allowedMethods())
router.use('/user',user.routes(),user.allowedMethods())
router.use("/course",course.routes(),course.allowedMethods())

module.exports = router