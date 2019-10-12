const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Inicializando o app.
const app = express();

//Inicializando o BD.
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true});

requireDir('./src/models');

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);