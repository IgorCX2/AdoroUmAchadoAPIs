const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('adoroumachado', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize.authenticate()
.then(()=>{
  console.log("foii");
}).catch(()=>{
  console.log("erro");
});
module.exports = sequelize;