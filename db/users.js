// 引入config 数据库连接模型
//引入sequelize
const sequelize  = require('./config');
const Sequelize  = require('sequelize');

const Users = sequelize.define('Users', {
  // 在这里定义模型属性,
  stuHead:{ type: Sequelize.STRING,
    // primaryKey:true
    },
    stuuName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  stuID: {
    type: Sequelize.STRING,
    primaryKey:true
    // allowNull 默认为 true
  },
  stuSex:{
    type: Sequelize.STRING,
  },
  stuNumber:{
    type:Sequelize.STRING
  },
  stueDegree:{
    type:Sequelize.STRING
  },
  stuGrade:{
    type: Sequelize.STRING
  },
  ID:{
    type:Sequelize.STRING
  },
  password:{
    type: Sequelize.STRING
  },
  root:{
    type: Sequelize.BOOLEAN,
    defaultValue:false
  }

 
   
}, {
  // 这是其他模型参数
  freezeTableName: true,
  timestamps: true,
});
// const AddUsers = async({stuHead,stuuName,stuID,stuSex,stuNumber,stueDegree,ID,password,stuGrade}) => {
//     return await Users.create({stuHead,stuuName,stuID,stuSex,stuNumber,stueDegree,ID,password})
// }
const AddUsers = async(payload) => {
  console.log(payload,'ppp');
  return await Users.create({...payload})

}
const GetUser = async(options) => {
  if(options) {
    return await Users.findOne({where:options})
  }
  return await Users.findAll()
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
  AddUsers,
  GetUser
    // AddGoods,
    // DeleteGoods,
    // UpdateGoods,
    // GetGoodsById,
    // GetAllGoods
};