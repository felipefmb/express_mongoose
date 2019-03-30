const server = require('express');
const mongoose = require('mongoose');

const uri = "mongodb://localhost/agenda";
mongoose.connect(uri);
mongoose.connection.on('connected', function () {
    console.log('Estou conectado no mongoDB');
})

const _modelContatos = new mongoose.Schema({
    "nome" : {
        type : String,
        required : true
    },
    "telefone" : String,
    "email" : String
})

mongoose.model('contatos', _modelContatos)


const app = server();

app.get('/contatos', function(req,resp) {
    var contatosModel = mongoose.model('contatos');
    contatosModel.find({}, function(err, dados) {
        if(err) {
            resp.send(500, err);
        }else{
            resp.send(200, dados);
        }
    })
})

app.post('/contatos', function(req,resp) {

})

app.listen(3000, function () {
    console.log('Rodando na porta 3000');
})