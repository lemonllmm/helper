const sequelize  = require('./config');  //引入数据库连接
const Sequelize  = require('sequelize'); 

const Chat = sequelize.define("Chat",{
    msgid:{  //消息id
        type:Sequelize.STRING
    },
    sendid:{ //发送方的id
        type:Sequelize.STRING,
       
    },
    recid:{ //接收方的id
        type:Sequelize.STRING
    },
    sendContent:{ //发送内容
        type:Sequelize.STRING
    },
    types:{  //内容类型 0 文字 1 图片链接  3 音频链接
        type:Sequelize.STRING

    },
    state:{ //消息状态 0表示已读 1 表示未读
        type:Sequelize.NUMBER
    }
},
{
    freezeTableName: true,

});

const Getchat = async(options)=>{
    return await Chat.findAll({where:options})
}


module.exports ={
    Getchat
}