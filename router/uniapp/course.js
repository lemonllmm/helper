const Router= require('koa-router')
const { v4: uuidv4} = require("uuid");
const {GetCourse} = require("../../db/course")
const { createMethod } = require('../../utils/createMethod');

const course = new Router()


createMethod(course,"/getCourse","get",async(q)=>{
    console.log(q,'course')
    return await GetCourse(q);
    //获取个人课表
    
})


module.exports = course