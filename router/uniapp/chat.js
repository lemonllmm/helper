const Router= require('koa-router')
const { v4: uuidv4} = require("uuid");
// const {} = require("../../db/chat")
const { createMethod } = require('../../utils/createMethod');

const chat = new Router()


createMethod(course,"/getChat","get",async(q)=>{
    console.log(q,'course')
    return await GetChat(q);
    //获取个人课表
    
})


module.exports = chat