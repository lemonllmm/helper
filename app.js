//引入koa2使用require
const Koa = require("koa2")
const app = new Koa()
//引入Router 
const Router = require('koa-router')
const router = new Router()
//引入跨域处理
const cors = require('koa2-cors')
const  uniapp = require('./router/uniapp/index')
const  manage = require('./router/manage/index');
const sequelize = require("./db/config");
const BodyParser = require('koa-bodyparser');

//前端APP
// app.use(uniapp.routes(),uniapp.allowedMethods())
//后台服务器
// app.use(manage.routes(),manage.allowedMethods()) 

//跨域处理 cors 中间件要写在路由之前
app.use(cors());
app.use(BodyParser());
sequelize.sync();
 
try {
    sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
router.get('/undefined',async (ctx)=>{
    ctx.body = '您已经退出登陆'
})
router.use('/uniapp',uniapp.routes(),uniapp.allowedMethods())
router.use('/manage',manage.routes(),manage.allowedMethods())

router.redirect('/','/undefined')
app.use(router.routes(),router.allowedMethods())


const {host,port} = require('./until')

//  app.use(async ctx=>{  代表根路径
//      ctx.body = 'hello koa'
//  })




app.listen(port,()=>{
    console.log(`Server is runing at ${host}:${port}`);
})


/*
/manage 后台管理
/uniapp 客户端
/fish  闲置交易数据
/like 表白墙数据
/lost  失物招领数据
/school 学校咨询板块数据
*/