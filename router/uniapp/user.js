const Router= require('koa-router')
// const {AddMessage,DeleteMessage,UpdateMessage,GetAllMessage,GetMessageById} = require("../../db/message");
// const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');
const { AddUsers, GetUser } = require('../../db/users');
const user = new Router()


createMethod(user,"/addUser",'post',async(q)=>{
    if(q) {
      return  await AddUsers(q).then(res=> res).catch(err=>err)
    }
})
createMethod(user,"/login",'post',async(q)=>{
    let res =  await GetUser(q).then(res=>res).catch(err=>err)
    let data=null;
    if(res) {
       data = {...res.dataValues};
        delete data.ID;
        delete data.password;
    }
    
    return data;
})

module.exports = user