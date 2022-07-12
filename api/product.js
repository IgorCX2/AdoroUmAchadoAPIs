const express = require("express");
const router = express.Router();
const Home = require('../models/Home');
const Productdesc = require('../models/Productdesc');
var bodyParser = require('body-parser');

router.use(express.json());
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
router.get("/", async (req, res) => {
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

router.get("/all", async (req, res) => {
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

module.exports = router;