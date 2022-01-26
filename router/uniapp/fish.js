const Router= require('koa-router');
const {AddFish,GetFish,GetAllFish,GetFishById} = require("../../db/fish");
const { v4: uuidv4} = require("uuid");
const { createMethod } = require('../../utils/createMethod');
const fish = new Router()

createMethod(fish,"/Addfish","post",async(q)=>{
    //  return   await GetFish();
    //  let payload =q;
     let  data ={
       ...q,
       fid:uuidv4(),
     }

    //  console.log(payload);
     return await AddFish(data);
    
})


// createMethod(fish,"/Getfish","get",async(q)=>{
//     if(data) {
      
//       return  await GetFish(data)
//     }
// })

// createMethod(fish,"/updateGoods","post",async(q)=>{
//     const {name,changeName} = q;
//     if(name) {
//       return   await UpdateGoods({lastName:changeName},{firstName:name})
//     }
// })
createMethod(fish,"/Getfish","get",async(q)=>{
    let {stu_id} = q;
    if(stu_id) {
        return await GetFishById(url)
    } else {
        return await GetAllFish();
    }
})

module.exports=fish