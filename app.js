const express = require('express');
const app = express();

app.get('/', async(req, res)=>{
    return res.json({
        erro: false,
        datahome: {
            titulo: "ola",
        }
    })
});

app.listen(8080, ()=>{
    console.log("foi");
});

