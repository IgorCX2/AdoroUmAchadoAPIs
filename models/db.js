const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('adoroumachado', 'root', '', {
  host: 'http://192.168.0.157',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});
sequelize.authenticate()
.then(()=>{
  console.log("foii");
}).catch(()=>{
  console.log("erro");
});
module.exports = sequelize;