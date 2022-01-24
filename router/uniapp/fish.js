const Router= require('koa-router');
const {AddFish,GetFish} = require("../../db/fish");
const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');
const fish = new Router()

createMethod(fish,"/Addfish","post",async(q)=>{
    //  return   await GetFish();
     const payload =q;
     console.log(payload);
     return await AddFish(payload);
    
})


createMethod(fish,"/Getfish","get",async(q)=>{
    if(data) {
      
      return  await GetFish(data)
    }
})

// createMethod(fish,"/updateGoods","post",async(q)=>{
//     const {name,changeName} = q;
//     if(name) {
//       return   await UpdateGoods({lastName:changeName},{firstName:name})
//     }
// })
// createMethod(fish,"/getGoods","get",async(q)=>{
//     let {firstName} = q;
//     if(firstName) {
//         return await GetGoodsById(url)
//     } else {
//         return await GetAllGoods();
//     }
// })

// const fishList = []
module.exports=fish