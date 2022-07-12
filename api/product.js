const express = require("express");
const router = express.Router();

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

router.get("/teste", async (req, res) =>{
  try{
    res.json({
      status: 200,
      message: "eu nao sei o que fazer",
    });
  }catch(error){
    console.log(error);
    return res.status(500).send("erro");
  }
});

module.exports = router;