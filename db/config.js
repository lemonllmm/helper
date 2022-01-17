const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize("helper", "root", "1234", {
    host: '127.0.0.1',
    port:"3306",
    dialect: 'mysql' /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
     logging: (...msg) => console.log(msg),
  });
  module.exports = sequelize;