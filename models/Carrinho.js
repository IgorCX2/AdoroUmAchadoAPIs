const { Sequelize } = require('sequelize');
const db = require('./db');

const Carrinho = db.define('carrinhos', {
    id_carrinho:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_produto:{
        type: Sequelize.STRING,
    },
    id_usuer:{
        type: Sequelize.STRING,
    },
});
Carrinho.sync();
module.exports = Carrinho;