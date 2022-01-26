// 引入config 数据库连接模型
//引入sequelize
const sequelize  = require('./config');
const Sequelize  = require('sequelize');

const Fish = sequelize.define('Fish', {
  // 在这里定义模型属性,
  fown:{ type: Sequelize.STRING,  //物品的卖家昵称
    },
    sale_id: {                     //物品卖家
    type: Sequelize.STRING,
    allowNull: true
  },
  buyer_id:{
    type: Sequelize.STRING,  //物品买家账号
  },
  buyer_name:{
    type: Sequelize.STRING, //物品买家昵称
  },
  fprice: {                       //物品价格
    type: Sequelize.STRING,
  },
  fimg:{                        //物品图片
    type: Sequelize.STRING,
  },
  fcomments:{                   //物品评论
    type:Sequelize.STRING
  },
  fintro:{                //物品介绍
    type:Sequelize.STRING
  },
  fstatus:{              //物品状态
      type:Sequelize.STRING
  },
  fid:{                //物品id唯一值
      type:Sequelize.STRING,
      primaryKey:true
  },
  fname:{              //物品名称
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
const AddFish = async(payload) => {
  console.log(payload,'ppp');
  return await Fish.create({...payload})

}
const GetFish = async(options) => {
  if(options) {
    return await Fish.findOne({where:options})
  }
  return await Fish.findAll()
}
const GetAllFish = async()=> {
  return await Fish.findAll()
}
// const DeleteGoods = async(options) => {
//     console.log(options)
//     return await Goods.destroy({where:options})
// }
// const UpdateGoods = async(payload,options) => {
//     return await Goods.update(payload,{where:options})
// }
const GetFishById = async(options) => {
    return await Fish.findOne({
        where:options
    })
}

module.exports = {
    AddFish,
    GetFish,
    GetAllFish,
    GetFishById
};