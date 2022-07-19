const express = require("express");
const router = express.Router();
const Carrinho = require('../models/Carrinho');
var bodyParser = require('body-parser');
router.use(express.json());
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
const cors = require('cors');
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  router.use(cors());
  next();
});

router.post('/add-carrinho', async (req, res) =>{
    await Carrinho.create(req.body)
    .then(()=>{
      return res.json({
        mensagem: "cadastrado"
      });
    }).catch(()=>{
      return res.json({
        mensagem: "erro"
      });
    });
});
router.post('/carrinho', async (req, res) =>{
  console.log(req.body.iduser);
  await Carrinho.findAll({
    where:{
      id_usuer: req.body.iduser
    }
  })
    .then((dataCar)=>{
      return res.json({
        dataCar
      });
    }).catch(()=>{
      return res.status(400).json({
        mensagem: "erro: nenhum valor"
      });
    });
});
module.exports = router;