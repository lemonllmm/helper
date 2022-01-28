const Router= require('koa-router')
const { v4: uuidv4} = require("uuid");
const {Getchat} = require("../../db/chat")
const { createMethod } = require('../../utils/createMethod');

const chat = new Router()


createMethod(course,"/getchat","get",async(q)=>{ //获取聊天信息
    console.log(q,'course')
    return await Getchat(q);
    //获取个人课表
    
})
module.exports = chat