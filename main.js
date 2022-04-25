const express = require('express');
const app = express();
app.use(express.json());

const { Suma } = require("./Operaciones/Suma");
const { Resta } = require("./Operaciones/Resta");
const { Multiplicacion } = require("./Operaciones/Multiplicacion");
const { Division } = require("./Operaciones/Division");

app.get('/', function (req, res) {
  res.send({
      id: 1,
      nombre: "Jouse Zea",
      fecha: new Date
  });
});

app.get('/resultadoFinal', function (req, res) {
    res.send({
        id: 2,
        nombre: "Nombre diferente",
        fecha: new Date()
    });
  });

app.post("/suma",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Suma(numero1, numero2);
    res.send(resultado);
});

app.post("/resta",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Resta(numero1, numero2);
    res.send(resultado);
});

app.post("/multiplicacion",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Multiplicacion(numero1, numero2);
    res.send(resultado);
});

app.post("/division",function(req, res){
    const { numero1, numero2 } = req.body;
    const resultado = Division(numero1, numero2);
    res.send(resultado);
});

app.listen(3000);