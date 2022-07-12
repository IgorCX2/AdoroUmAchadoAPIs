const { Sequelize } = require('sequelize');
const db = require('./db');

const Home = db.define('produtos', {
    id_produto:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_produto:{
        type: Sequelize.STRING,
        allowNull: false
    },
    categorias:{
        type: Sequelize.STRING,
    },
    capa:{
        type: Sequelize.STRING,
    },
    valor:{
        type: Sequelize.DECIMAL,
    },
    vendidos:{
        type: Sequelize.INTEGER,
    },
});
Home.sync();
module.exports = Home;