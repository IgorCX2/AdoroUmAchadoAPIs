const express = require("express");
const router = express.Router();
var bodyParser = require('body-parser');
const User = require('../models/Users');
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require('jsonwebtoken');
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

router.post('/cadastro', async (req, res) =>{
  console.log(req.body);
  var dados = req.body;
  const emailv = await User.findOne({
    attributes: ['email'],
    where:{
      email: req.body.email
    }
  });
  const cpf = await User.findOne({
    attributes: ['cpf'],
    where:{
      cpf: req.body.cpf
    }
  });
  const celularv = await User.findOne({
    attributes: ['celular'],
    where:{
      celular: req.body.celular
    }
  });
  if(emailv != null){
    return res.json({
      erro: true,
      mensagem: "erro, email ja cadastrado",
    });
  }
  if(cpf != null){
    return res.json({
      erro: true,
      mensagem: "erro, cpf ja cadastrado",
    });
  }
  if(celularv != null){
    return res.json({
      erro: true,
      mensagem: "erro, celular ja cadastrado",
    });
  }
  dados.senha = await bcrypt.hash(dados.senha, 8);
  await User.create(dados)
  .then(()=>{
    return res.json({
      erro: false,
      mensagem: "foi"
    });
  }).catch(()=>{
    return res.json({
      erro: true,
      mensagem: "erro"
    });
  });
});

router.post('/entrar', async (req, res) =>{
  console.log(req.body);
  const loginv = await User.findOne({
    attributes: ['id_user','email', 'senha', 'nome_user'],
    where:{
      email: req.body.email
    }
  });
  if(loginv === null){
    return res.json({
      erro: true,
      mensagem: "Erro: usuario ou senha incorreta(email)",
    });
  }
  if(!(await bcrypt.compare(req.body.senha, loginv.senha))){
    return res.json({
      erro: true,
      mensagem: "Erro: usuario ou senha incorreta(senha)",
    });
  }
  var token = jwt.sign({id: loginv.id_user, nick: loginv.nome_user}, "OD2DS8S21DSA4SD4SS3A",{
    expiresIn: '1d'
  })
  return res.json({
      erro: false,
      mensagem: "login realizado com sucesso",
      token
  })
});
module.exports = router;
