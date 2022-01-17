const Router= require('koa-router')
const router = new Router()
const student = require('./student')
const login = require('./login')
const register = require('./register')


router.get('/',async (ctx)=>{
    ctx.body = '我是管理主页'
})
router.use('/student',student.routes(),student.allowedMethods())
router.use('/login',login.routes(),login.allowedMethods())
router.use('/register',register.routes(),register.allowedMethods())
module.exports = router