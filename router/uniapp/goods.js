const Router= require('koa-router');
const {AddGoods,GetAllGoods,GetGoodsById} = require("../../db/goods");
const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');
const goods = new Router()

createMethod(goods,"/AddGoods","post",async(q)=>{
//    添加失物招领
   let data ={
    ...q,
    Gid:uuidv4()
   } 
     return await AddGoods(data);
    
})

createMethod(goods,"/GetGoods","get",async(q)=>{
    // 展示失物招领的信息
    const {pushid }= q
    if(pushid) {
      return await GetGoodsById(pushid)
  } else {
      return await GetAllGoods(q);
  }
    
})

module.exports=goods