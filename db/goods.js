// const sequelize  = require('./config');
// const Sequelize  = require('sequelize');



// const Goods = sequelize.define('Goods', {
//   // 在这里定义模型属性,
//   id:{ type: Sequelize.STRING(111),
//     primaryKey:true
//     },
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   lastName: {
//     type: Sequelize.STRING
//     // allowNull 默认为 true
//   },
   
// }, {
//   // 这是其他模型参数
//   freezeTableName: true,
//   timestamps: false,
// });
// const AddGoods = async({id,firstName,lastName}) => {
//     return await Goods.create({id,firstName,lastName})
// }
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
// // module.exports = {
// //     AddGoods,
// //     DeleteGoods,
// //     UpdateGoods,
// //     GetGoodsById,
// //     GetAllGoods
// // };