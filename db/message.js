const sequelize  = require('./config');
const Sequelize  = require('sequelize');

const Message = sequelize.define('Message', {
    // 在这里定义模型属性,
    type:{ type: Sequelize.STRING,
      allowNull: false
      },
    title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    datetime: {
      type: Sequelize.DATE, 
      allowNull: false,
      defaultValue: Sequelize.NOW
      // allowNull 默认为 true
    // 先要定义表 然后定义类型 表下写那个数据库的增删改查方法 再进行导出 
    // 然后再路由里面进行注册 调用数据库的方法 就完成了一个接口
    },
    id:{
        type:Sequelize.STRING(111),
        primaryKey:true
    }
     
  }, {
    // 这是其他模型参数
    freezeTableName: true,
    timestamps: true,//就是表内自动生成创建时间 更新时间
  });

  
const AddMessage= async({id,type,title,datetime}) => {
    return await Message.create({id,type,title,datetime})
}
const DeleteMessage = async(options) => {
    console.log(options)
    return await Message.destroy({where:options})
}
const UpdateMessage = async(payload,options) => {
    return await Message.update(payload,{where:options})
}
const GetMessageById = async(options) => {
    return await Message.findOne({
        where:options
    })
}
const GetAllMessage= async()=> {
    return await Message.findAll()
}

module.exports = {
   AddMessage,
   DeleteMessage,
   UpdateMessage,
   GetAllMessage,
   GetMessageById
};
