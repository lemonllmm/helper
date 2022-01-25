
const sequelize  = require('./config');  //引入数据库连接
const Sequelize  = require('sequelize'); 

const Course = sequelize.define("Course",{
    stu_id:{ //学生id
        type:Sequelize.STRING,
       
    },
    Cname:{ //课程名称
        type:Sequelize.STRING
    },
    Cteacher:{ //任课老师
        type:Sequelize.STRING
    },
    Cplace:{ //上课地点
        type:Sequelize.STRING
    },
    Ctime:{ //上课时间
        type:Sequelize.STRING
    }
},
{
    freezeTableName: true,

});

const GetCourse = async(options)=>{
    return await Course.findAll({where:options})
}

module.exports ={
    GetCourse
}