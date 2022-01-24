// 引入config 数据库连接模型
//引入sequelize
const sequelize  = require('./config');
const Sequelize  = require('sequelize');

const Fish = sequelize.define('Fish', {
  // 在这里定义模型属性,
  fown:{ type: Sequelize.STRING,
    },
    stu_id: {
    type: Sequelize.STRING,
    allowNull: true
  },
  fprice: {
    type: Sequelize.STRING,
  },
  fimg:{
    type: Sequelize.STRING,
  },
  fcomments:{
    type:Sequelize.STRING
  },
  fintro:{
    type:Sequelize.STRING
  },
  fstatus:{
      type:Sequelize.STRING
  },
  fid:{
      type:Sequelize.STRING,
      primaryKey:true
  },
  fname:{
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
// const DeleteGoods = async(options) => {
//     console.log(options)
//     return await Goods.destroy({where:options})
// }
// const UpdateGoods = async(payload,options) => {
//     return await Goods.update(payload,{where:options})
// }
// const GetGoodsById = async(options) => {
//     return await Goods.findOne({
//         where:options
//     })
// }
// const GetAllGoods = async()=> {
//     return await Goods.findAll()
// }
module.exports = {
    AddFish,
    GetFish
};