const Router= require('koa-router')
const {AddMessage,DeleteMessage,UpdateMessage,GetAllMessage,GetMessageById} = require("../../db/message");
const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');
const { AddUsers } = require('../../db/users');
const school = new Router()

createMethod(school,"/addMessage",'post',async(q)=>{
    const {type,title,datetime} =q;
    const data={
        type,
        title,
        datetime,
        id:uuidv4()
    }
    return await AddMessage(data);
    

})

createMethod(school,"/addUser",'post',async(q)=>{
    const {type,title,datetime} =q;
    const data={
        type,
        title,
        datetime,
        id:uuidv4()
    }
    return await AddUsers(data);
    

})

createMethod(school,"/deleteMessage","delete",async(q)=>{
    const {id} = q;
    if(id) {
     return   await DeleteMessage({id});
    }
})

createMethod(school,"/updateMessage",'post',async(q)=>{
    const {id,title} =q;
    return await UpdateMessage({title},{id});
    

})






module.exports = school