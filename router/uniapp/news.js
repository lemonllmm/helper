const Router= require('koa-router')
const { v4: uuidv4} = require("uuid");
const {GetNews,AddNews,DeleteNews} = require("../../db/news")
const { createMethod } = require('../../utils/createMethod');

const news = new Router()


createMethod(news,"/getNews","get",async(q)=>{
    return await GetNews(q);
    //获取新闻标题时间
    
})

createMethod(news,"/addNews","post",async(q)=>{
  const {title,content} = q
  const data ={
    new_id:uuidv4(),
    title,
    content,
    
  }
   console.log('data1',data)
      return  await AddNews(data)
    
})

createMethod(news,"/deleteNews","delete",async(q)=>{
    const {new_id} = q;
    
    if(new_id) {
     return   await DeleteNews({new_id});
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