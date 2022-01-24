
const sequelize  = require('./config');  //引入数据库连接
const Sequelize  = require('sequelize'); 

const News = sequelize.define("News",{
    new_id:{ //校园咨询的id
        type:Sequelize.STRING,
        primaryKey:true,
    },
    title:{ //咨询标题
        type:Sequelize.STRING
    },
    content:{ //咨询内容
        type:Sequelize.TEXT
    }
},
{
    timestamps:true,

});

const GetNews = async(options)=>{
    if(options.length){
        return await News.findOne({where:options})
    }
    return await News.findAll()
}


const AddNews = async(payload)=>{
    console.log(payload,"111")
    return await News.create({...payload})

}

const DeleteNews = async(options)=>{
    console.log(options)
    return News.destroy({where:options})

}

module.exports ={
    GetNews,
    AddNews,
    DeleteNews
}