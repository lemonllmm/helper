// 引入config 数据库连接模型
//引入sequelize
const sequelize  = require('./config');
const Sequelize  = require('sequelize');

const Love = sequelize.define('Love', {
  // 在这里定义模型属性,
  Lname:{ type: Sequelize.STRING,  //物品的卖家昵称
    },
    Lproperty: {                     //物品卖家
    type: Sequelize.STRING,
    allowNull: true
  },
  Lcontent:{
    type: Sequelize.STRING,  //物品买家账号
  },
  Lcomment:{
    type: Sequelize.STRING, //物品买家昵称
  },
  Lgreat: {                       //物品价格
    type: Sequelize.STRING,
  },
  Lid:{                        //物品图片
    type: Sequelize.STRING,
    primaryKey:true
  },
  putid:{                   //物品评论
    type:Sequelize.STRING
  }
}, {
  // 这是其他模型参数
  freezeTableName: true,
  timestamps: true,
});
// const AddUsers = async({stuHead,stuuName,stuID,stuSex,stuNumber,stueDegree,ID,password,stuGrade}) => {
//     return await Users.create({stuHead,stuuName,stuID,stuSex,stuNumber,stueDegree,ID,password})
// }
const AddLove = async(payload) => {
  console.log(payload,'ppp');
  return await Love.create({...payload})

}
const GetLove = async(options) => {
  if(options) {
    return await Love.findOne({where:options})
  }
  return await Love.findAll()
}
const GetAllLove = async()=> {
  return await Love.findAll()
}

const GetLoveById = async(options) => {
    return await Love.findOne({
        where:options
    })
}

module.exports = {
    AddLove,
    GetLoveById,
    GetAllLove
};