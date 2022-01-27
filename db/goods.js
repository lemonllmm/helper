const sequelize  = require('./config');
const Sequelize  = require('sequelize');

const Goods = sequelize.define('Goods', {
  // 在这里定义模型属性,
Gid:{ type: Sequelize.STRING(111),
    //丢失物品的id
    primaryKey:true
    },
Gtype:{ //设置物品的属性 是寻找失主 ture 还是寻找物品 false
        type:Sequelize.BOOLEAN
    },
Gname: {
    //   丢失物品的名称
    type: Sequelize.STRING,
    allowNull: true
  },
Gimg: {  
    //   物品图片链接
    type: Sequelize.STRING
    // allowNull 默认为 true
  },
Gpush:{  //发布人
      type:Sequelize.STRING
  },
  Gpushid:{
    type:Sequelize.STRING
  }
   
}, {
  // 这是其他模型参数
  freezeTableName: true,
  timestamps: false,
});
const AddGoods = async(payload) => {
    console.log(payload,'ppp');
    return await Goods.create({...payload})
  
}
const DeleteGoods = async(options) => {
    console.log(options)
    return await Goods.destroy({where:options})
}
const UpdateGoods = async(payload,options) => {
    return await Goods.update(payload,{where:options})
}
const GetGoodsById = async(options) => {
    return await Goods.findOne({
        where:options
    })
}
const GetAllGoods = async()=> {
    return await Goods.findAll()
}
module.exports = {
    AddGoods,
    DeleteGoods,
    UpdateGoods,
    GetGoodsById,
    GetAllGoods
};