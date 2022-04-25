const express = require('express');
const app = express();
app.use(express.json());

const { Suma } = require("./Operaciones/Suma");

app.get('/', function (req, res) {
  res.send({
      id: 1,
      nombre: "Pepito"
  });
})

app.post("/suma",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Suma(numero1, numero2);
    res.send(resultado);
});

app.post("/resta",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Suma(numero1, numero2);
    res.send(resultado);
});

app.post("/multiplicacion",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Suma(numero1, numero2);
    res.send(resultado);
});

app.post("/division",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Suma(numero1, numero2);
    res.send(resultado);
});

app.listen(3000);