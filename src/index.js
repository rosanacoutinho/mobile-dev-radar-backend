const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

uri = 'mongodb+srv://omnistack:omnistack@cluster0.fp7oz.mongodb.net/week10?retryWrites=true&w=majority'

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
//Query params : request.query (filtros, ordenacao, paginacao)
//Route params : request.params (identificar um recurso durante uma alteracao ou remocao)
//Body: request.body (Dados para alteracao ou criacao de um registro)

server.listen(3333);