const { Sequelize } = require('sequelize');
const db = require('./db');

const Productdesc = db.define('produtosdesc', {
    id_produto:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao:{
        type: Sequelize.STRING,
    },
    imgs:{
        type: Sequelize.STRING,
    },
});
Productdesc.sync();
module.exports = Productdesc;