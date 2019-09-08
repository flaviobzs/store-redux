utilizando a api

transformando em json

json-server (biblioteca)
yarn global add json-server

axios
yarn add axios
consumir a API

rodar o servidor json
flag -w indica que pode mudar o arquivo
json-server server.json -p 3333 -w

realizar a formatação antes em uma variavel para evitar retrabalho de chamar a função que formata

yarn add
redux
react-redux //integração do redux com o react

para utilizar varios reduces (amazenador de estado global) utilizar o arquivo root na pasta modules, importar os reduces e combinar-los

///////

- conectar todos os componentes necessarios para o processo de informação GLOBAL

- criar evento com o dispatch para disparar as ACTIONs que indica mudança do state GLOBAL (type é obrigatorio)

nos reduces - criar um switch para ouvir a action necessaria, e não ouvir todas e guarda as informações UNICAS que serão compartilhadas entre os componentes

- avisar os componentes que possuiem o connect e necessita das informações

... no redux biblioteca para lidar com obj e array immutable (não podem mudar) - copiar e adicionar [cria um novo estado e não altera o antigo] IMMER
