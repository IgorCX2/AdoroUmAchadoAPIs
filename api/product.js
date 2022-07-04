const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: {
        textoo: "computador gameerrr",
        textos: "o preco e 100",
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;