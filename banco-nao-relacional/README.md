-- Mongo DB
--- pode arrastar a pasta descompactada para a pasta Applications.

Obs: o MongoDB é case sensitive

/* No Terminal, adicionar o path */
> sudo nano /etc/paths
> ***

/* No arquivo de paths, adicionar... */
-- /Applications/<NomeDaPastaMongodb>/bin

/* reiniciar o terminal para que se leia a atualização do arquivo de paths */
> mongo --version

/* criar a pasta data */
> sudo mkdir /data
> sudo mkdir /data/db

/* startar o servidor do mongodb */
> mongod

/* para utilizar o mongodb, é preciso abrir outro terminal para que o servidor continue rodando */
> mongo

////* existe uma ferramenta visual para utilizar o mongodb se quiser: robomongo.org */

/* para mostrar várias opçoes para uma determinada situacao */
> db. <TAB><TAB>

/* apagar a tela */
> cls

/* mostrar todas as bases */
> show dbs

/* para acessar uma base, já criada ou não */
> use nomedabase

/* se a base foi criada nesse momento, ao dar um show dbs, ela não será exibida, pois tem nada. Mas posso começar a criar collections, por exemplo */
> db.createCollection('estados')
////* nesse caso, dando um show dbs agora, o banco que foi criado será exibido */

/* para exibir as collections de uma base */
> show collections

/* para excluir uma collection */
> db.nomedacollection.drop()

/* para inserir um registro em uma coleção, mesmo que essa collection não exista */
> db.nomedacollection.insert({campo1: "valor1", campo2: "valor2", campo3: "valor3"})
OU
> db.nomedacollection.save({campo1: "valor1", campo2: "valor2", campo3: "valor3"})

/* para exibir o registro de uma collection */
> db.nomedacollection.find()
OU
> db.nomedacollection.find().pretty()  //irá exibir os dados de maneira mais organizada

/* para inserir registros dentro de registros (array) */
> db.nomedacollection.insert({
    campo1: "valor1", 
    campo2: "valor2", 
    campo3: [{
        campo4: "valor4", 
        campo5: "valor5"
        }]
    })

/* para inserir registros dentro de registro com IDs específicos */
> db.nomedacollection.insert({
    campo1: "valor1", 
    campo2: "valor2", 
    campo3: [
        {
            _id: ObjectId(),
            campo4: "valor4", 
            campo5: "valor5"
        },
        {
            _id: ObjectId(),
            campo6: "valor6",
            campo7: "valor7"
        }
        ]
    })

/* para pegar o primeiro registro que ele encontrar eum uma collection */
> db.nomedacollection.findOne()

/* para pegar registros específicos */
> db.nomedacollection.find({campoescolhido: "valordocampodesejado"}) // ou findOne()

/* utilizando o OU ($or) ou E ($and) para verificar mais de uma condição */
> db.nomedacollection.find({$or: [{sigla: "RJ"}, {sigla: "AC"}]}).pretty()

/* para trazer registros que possui determinado atributo, deve-se usar o exists */
> db.nomedacollection.find({campodesejado: {$exists: true}})

/* para dar um skip e/ou limit a quantidade de registros a serem retornados, deve-se usar o skip(N) ou limit(N) */
> db.nomedacollection.find().skip(1).limit(2)
// nesse exemplo, ele vai pular o primeiro registro, ou seja, vai trazer a partir do segundo registro, e vai trazer dois registros apenas.

/* para saber quantos registros têm dentro de uma collection */
> db.nomedacollection.count()

/* para que um registro seja trazido apenas os atributos que quero, basta informar o campo e 1 para true. Por padrão, o _id sempre vem, então para que não seja exibido, informar 0 para o _id */
> db.nomedacollection.find({sigla: "SP"}, {campoexibir1: 1, campoexibir2: 1, _id: 0})

/* para exibir atributos de outros niveis, segu exemplo */
> db.nomedacollection.find({sigla: "SP"}, {"cidades.nome": 1, _id: 0})

/* aggregation pipeline stages */
/* db.nomedacollection.aggregate([{<stage>, ...}]) 
Example: o $project vai determinar quais são os atributos que você quer que sejam passados para o próximo passo do pipeline de agregação */
> db.estados.aggregate([
    { $project: {nome: 1, "cidade.nome": 1, _id: 0 }}
])

/* Example 2: ao utilizar o "cidades.populacao" do lado direito, ou seja, como resultado de $sum, é necessário ter o $ na frente do "cidades.populacao", porque assim o compilador sabe que tem que interpolar esses valores para ser colocado em $sum*/
> db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0}}
])
/* no exemplo acima, ele vai trazer o total da populacao por estado */

> db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0}},
    {$group: {_id: null, populacaoTotal: {$sum: "$populacao"}}}
])
/* no exemplo acima, ele vai trazer o total da populacao geral. Neste caso ele vai trazer o atributo "id" com o valor 0 */

> db.estados.aggregate([
    {$project: {populacao: {$sum: "$cidades.populacao"}, sigla: 1, _id: 0}},
    {$group: {_id: null, populacaoTotal: {$sum: "$populacao"}}},
    {$project: { _id: 0, populacaoTotal: 1}}
])
/* no exemplo acima, ele vai trazer o total da populacao geral. Neste caso ele NÃO vai trazer o atributo */

/* usando o $match 
Exemplo: para trazer o estado que tem a cidade Sorocaba */
> db.estados.aggregate([
    { $match: {"cidades.nome": "Sorocaba"}}
]).pretty()
/* neste exemplo, ele vai trazer todas as informações o estado que deu o match */

> db.estados.aggregate([
    { $match: {"cidades.nome": "Sorocaba"}},
    { $unwind: "$cidades"}
]).pretty()
/* neste exemplo, ele vai trazer todas as informações o estado que deu o match, porém, com o uso do #unwind, ele vai trazer a quantidade de cidades do estado em documentos separados por cidade.  */

> db.estados.aggregate([
    { $match: {"cidades.nome": "Sorocaba"}},
    { $unwind: "$cidades"},
    { $match: {"cidades.nome": "Sorocaba"}}
]).pretty()
/* neste exemplo, ele vai trazer todas as informações o estado, porém no quedito cidade, ele vai trazer só Sorocaba.  */

> db.estados.aggregate([
    { $match: {"cidades.nome": "Sorocaba"}},
    { $unwind: "$cidades"},
    { $match: {"cidades.nome": "Sorocaba"}},
    { $project: {_id: "$cidades._id"}}
]).pretty()
/* neste exemplo, ele vai trazer somente o ID da cidade Sorocaba */

/* usando o $exists */
/* Exemplo: vai trazer todos os estados que tem o atributo populacao, e exibir apenas o nome */
> db.estados.find({populacao: {$exists: true}}, {_id: 0, nome: 1})

/* UPDATE */
/* Exemplo: ele vai alterar a populacao apenas do estado SP */
> db.estados.update({ sigla: "SP"}, {$set: {populacao: 45340000}})

/* Exemplo 2: */
> db.estados.update({sigla: "AL"}, {$set: {cidades: [{nome: "Sergipe"}]}})
/* no exemplo acima, considere que AL não tem nenhum cidade, então essa abordagem funciona */

/* Exemplo 3: */
> db.estados.update({sigla: "SP"}, {$push: {cidades: {nome: "Santos", populacao: 439898}}})
/* no exemplo acima, considere que SP tem algumas cidades, ou seja, as cidades estão dentro de um array. Portanto, o $push é necessário */

/* Exemplo 4: vai atualizar o atributo populacao do estado RJ */
> db.estados.update({sigla: "RJ"}, {$set: {populacao: 16720000}})

asdasds


/* REMOVE */
/* Exemplo: */
> db.estados.remove({sigla: "AC"})

/* Exemplo 2: vai excluir apenas 1 estado que possuir populacao */
> db.estados.remove({populacao: {$exists: true}}, 1)

/* Exemplo 3: vai excluir todos os estados que possuir menos que 20000000 de populacao */
> db.estados.remove({populacao: {$lt: 20000000}})






