const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const contado = { 
        nome: "Daniel", 
        email: "daniel.carmo2008@gmail.com",
        telefone: "92995039079"
    }
    res.send(JSON.stringify(contado))
})


app.listen(3333, () => {
    console.log("Api rodando na porta 3333.");
})

