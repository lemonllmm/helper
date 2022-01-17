const Router= require('koa-router');
const {AddGoods,DeleteGoods, UpdateGoods,GetGoodsById,GetAllGoods} = require("../../db/goods");
const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');
const fish = new Router()

createMethod(fish,"/deleteGoods","delete",async(q)=>{
    const {name} = q;
    if(name) {
     return   await DeleteGoods({firstName:name});
    }
})
createMethod(fish,"/updateGoods","post",async(q)=>{
    const {name,changeName} = q;
    if(name) {
      return   await UpdateGoods({lastName:changeName},{firstName:name})
    }
})
createMethod(fish,"/getGoods","get",async(q)=>{
    let {firstName} = q;
    if(firstName) {
        return await GetGoodsById(url)
    } else {
        return await GetAllGoods();
    }
})

createMethod(fish,"/addGoods","post",async(q)=>{
    const {firstName,lastName} =q;
    const data = {
        firstName,
        lastName,
        id:uuidv4()
    }
    if(data) {
      
      return  await AddGoods(data)
    }
})
const fishList = []
module.exports=fish