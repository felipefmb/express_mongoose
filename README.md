Comandos úteis mongodb
db -> variável global que representa o banco de dados

- show dbs -> Mostra os bancos de dados criados(Por padrão - admin, config, e local)
- use <banco> -> Usa um banco, mesmo que não exista. Vai criar o banco quando criar a collection
- mongo <banco> -> Acessa o banco diretamente


Após a acessar, criar uma coleção
db.createCollection("colecao")

show collections -> mostra as coleções

db.<collection>.drop() -> Apaga uma coleção

db.<collection>.insert -> apenas insere
db.<collection>.save -> verifica se o objeto existe antes de salvar

-- Exemplo insert and save -> Insere/Substitui todo o objeto do banco --
show collections
clientes
pedidos
> db.clientes.insert({
... "nome" : "Felipe",
... "email" : "felipefmb@gmail.com",
... "telefone" : "48999368282"
... })
WriteResult({ "nInserted" : 1 })
> db.clientes.find()
{ "_id" : ObjectId("5c9f71436ef7b4c7e3a41ea8"), "nome" : "Felipe", "email" : "felipefmb@gmail.com", "telefone" : "48999368282" }
> var clientes = {
... "nome" : "Maria Laura",
... "email" : "marialaura@gmail.com",
... "telefone" : "4834785658"
... }
> db.clientes.save(clientes)
WriteResult({ "nInserted" : 1 })
> db.clientes.find()
{ "_id" : ObjectId("5c9f71436ef7b4c7e3a41ea8"), "nome" : "Felipe", "email" : "felipefmb@gmail.com", "telefone" : "48999368282" }
{ "_id" : ObjectId("5c9f719c6ef7b4c7e3a41ea9"), "nome" : "Maria Laura", "email" : "marialaura@gmail.com", "telefone" : "4834785658" }
--

db.clientes.find() -> pesquisa em uma coleção

-- Exemplo de busca com regex --
 db.clientes.findOne({nome : {$regex: "Batista$"} })
{
        "_id" : ObjectId("5c9f71436ef7b4c7e3a41ea8"),
        "nome" : "Felipe Marques Batista",
        "email" : "felipefmb@gmail.com",
        "telefone" : "48999368282"
}
> db.clientes.findOne({nome : {$regex: "^Batista"} })
null
> db.clientes.findOne({nome : {$regex: "^Felipe"} })
{
        "_id" : ObjectId("5c9f71436ef7b4c7e3a41ea8"),
        "nome" : "Felipe Marques Batista",
        "email" : "felipefmb@gmail.com",
        "telefone" : "48999368282"
}
> db.clientes.findOne({nome : {$regex: "Felipe"} })
--





$nor -> Não permite que os dois sejam true. Apenas um ou outro, diferente do $or que permite que os dois sejam true