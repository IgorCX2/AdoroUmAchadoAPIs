const express = require("express");
const prodteste = express.Router();
const Home = require('../models/Home');

prodteste.get("/", async (req, res) => {
  await Home.findAll({
    limit: 5,
    order: [
      ['vendidos', 'DESC'],
    ],
    attributes: ['id_produto', 'nome_produto', 'categorias', 'capa', 'vendidos', 'valor'],
  })
    .then((dataHome)=>{
      return res.json({
        dataHome
      });
    }).catch(()=>{
      return res.status(400).json({
        mensagem: "erro: nenhum valor"
      });
    });
});

prodteste.get("/all", async (req, res) => {
  await Home.findAll({
    attributes: ['id_produto', 'nome_produto', 'categorias', 'capa', 'vendidos', 'valor'],
  })
    .then((dataHome)=>{
      return res.json({
        dataHome
      });
    }).catch(()=>{
      return res.status(400).json({
        mensagem: "erro: nenhum valor"
      });
    });
});

module.exports = prodteste;