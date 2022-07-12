const { Sequelize } = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id_user:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_user:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento:{
        type: Sequelize.STRING,
    },
    cpf:{
        type: Sequelize.STRING,
    },
    celular:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    senha:{
        type: Sequelize.STRING,
    },
    not_email:{
        type: Sequelize.STRING,
    },
});
User.sync({alter:true});
module.exports = User;