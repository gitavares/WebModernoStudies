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

>.... só um teste