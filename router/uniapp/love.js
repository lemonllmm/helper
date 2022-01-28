const Router = require('koa-router')
const love = new Router()

const {AddLove,GetLoveById,GetAllLove} = require("../../db/love");
const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');


createMethod(love,"/AddLove","post",async(q)=>{
    //  return   await GetFish();
    //  let payload =q;
     let  data ={
       ...q,
       Lid:uuidv4(),
     }

    //  console.log(payload);
     return await AddLove(data);
    
})

createMethod(love,"/Getlove","get",async(q)=>{
  // let {Lproperty} = q;
  
  if(q) {
      return await GetLoveById(q)
  } else {
      return await GetAllLove();
  }
})



module.exports = love