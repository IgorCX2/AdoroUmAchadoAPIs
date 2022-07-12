const express = require("express");
const router = express.Router();
const Home = require('../models/Home');

router.get("/", async (req, res) =>{
  try{
    res.json({
      status: 200,
      message: "pçaa",
    });
  }catch(error){
    console.log(error);
    return res.status(500).send("erro");
  }
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