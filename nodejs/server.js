const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o APP
const app = express();
// permitir enviar dados para a aplicação no formato JSON
app.use(express.json());
app.user(cors());

// Inicioando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
requireDir("./src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
