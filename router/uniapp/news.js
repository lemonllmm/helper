const Router= require('koa-router')
const { v4: uuidv4} = require("uuid");
const {GetNews,AddNews} = require("../../db/news")
const { createMethod } = require('../../utils/createMethod');

const news = new Router()


createMethod(news,"/getNews","get",async(q)=>{
    const payload = q;
    console.log(payload);
    return await GetNews(payload);
    //获取新闻标题时间
    
})

createMethod(news,"/addNews","post",async(q)=>{
    // const {title,content} =q;
    const data = {
        ...q
    }
    if(data) {
      
      return  await AddNews(data)
    }
})


// createMethod(school,"/addMessage",'post',async(q)=>{
//     const {type,title,datetime} =q;
//     const data={
//         type,
//         title,
//         datetime,
//         id:uuidv4()
//     }
//     return await AddMessage(data);
    

// })

// createMethod(school,"/addUser",'post',async(q)=>{
//     const {type,title,datetime} =q;
//     const data={
//         type,
//         title,
//         datetime,
//         id:uuidv4()
//     }
//     return await AddUsers(data);
    

// })

// createMethod(school,"/deleteMessage","delete",async(q)=>{
//     const {id} = q;
//     if(id) {
//      return   await DeleteMessage({id});
//     }
// })

// createMethod(school,"/updateMessage",'post',async(q)=>{
//     const {id,title} =q;
//     return await UpdateMessage({title},{id});
    

// })






module.exports = news