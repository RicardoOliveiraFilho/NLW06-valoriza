<a id="topo"></a>

<h1>API Valoriza</h1>

<p align="center">
  <a href="https://github.com/RicardoOliveiraFilho">
    <img alt="Feito pelo Ricardo Oliveira" src="https://img.shields.io/badge/FEITO%20POR-RICARDO%20OLIVEIRA-blueviolet">
  </a>
  <img alt="Licença do Projeto" src="https://img.shields.io/badge/LICENSE-MIT-blueviolet"/>
<p>

<p align="center">
  <a href="#endpoints">Endpoints</a> •
  <a href="#pre-requisitos">Pré-requisitos</a> •
  <a href="#rodando">Rodando a Aplicação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>
</p>

### Endpoints<a id="endpoints"></a> - <a href="#topo">Topo</a>
<table>
  <tr>
    <th>Método HTTP</th>
    <th>Rota</th>
    <th>Descrição</th>
  </tr>
  <tr>
    <td>POST</d>
    <td><i>[url_base]/users</i></d>
    <td>Possibilita o cadastro de novos usuários</d>
  </tr>
  <tr>
    <td>GET</d>
    <td><i>[url_base]/users</i></d>
    <td>Possibilita listar todos os usuários cadastrados. Requer autenticação</d>
  </tr>
  <tr>
    <td>POST</d>
    <td><i>[url_base]/login</i></d>
    <td>Possibilita a autenticação de um usuário</d>
  </tr>
  <tr>
    <td>POST</d>
    <td><i>[url_base]/tags</i></d>
    <td>Possibilita o cadastro de novas tags de identificação de elogios. Requer autenticação</d>
  </tr>
  <tr>
    <td>GET</d>
    <td><i>[url_base]/tags</i></d>
    <td>Possibilita listar todas as tags de identificação de elogios cadastradas. Requer autenticação</d>
  </tr>
  <tr>
    <td>POST</d>
    <td><i>[url_base]/compliments</i></d>
    <td>Possibilita o cadastro de novos elogios. Requer autenticação</d>
  </tr>
  <tr>
    <td>GET</d>
    <td><i>[url_base]/users/compliments/send</i></d>
    <td>Possibilita listar os elogios feitos pelo usuário autenticado</d>
  </tr>
  <tr>
    <td>GET</d>
    <td><i>[url_base]/users/compliments/receive</i></d>
    <td>Possibilita listar os elogios recebidos pelo usuário autenticado</d>
  </tr>
</table>

<h4  align="left">
Projeto finalizado ✔
</h4>

###  Pré-requisitos<a id="pre-requisitos"></a> - <a href="#topo">Topo</a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Git](https://git-scm.com/) 
 e [Node.js](https://nodejs.org/pt-br/)
 
 Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/). É aconselhável também utilizar algum programa
 que possibilite o consumo da api como o [Insomnia](https://insomnia.rest/) ou alguma extensão do VSCode como a [Thunder Client](https://www.thunderclient.io/).
 
 Para finalizar, precisará também configurar um segredo (app secret) para que seja possível realizar a autenticação através do [JWT](https://jwt.io/).
 
 Deve-se inserir a informação do segredo em um arquivo de variáveis de ambiente.
 
 ````bash
 # Utilize o arquivo presente no projeto chamado .env.example
 
 # JWT
 APP_API_SECRET=
 ````

 Para poder criar o segredo da aplicação basta ir em qualquer site de geração de hash, como o [MD5 Hash Generator](https://www.md5hashgenerator.com/).

### Rodando a Aplicação<a id="rodando"></a> - <a href="#topo">Topo</a>
   
````bash 
 # Clone este repositório
 git clone https://github.com/RicardoOliveiraFilho/NLW06-valoriza.git
 # Acesse a pasta do projeto no terminal, a partir do diretório ao qual o comando de clonagem foi executado
 cd NLW06-valoriza
 
 # Instale as dependências
 $ yarn install ou
 $ npm i 
 
 # Com as dependências instaladas execute o seguinte comando - ele fará com que as tabelas sejam criadas
 $ npm run typeorm migration:run
 ou
 $ yarn typeorm migration:run
 
 # Execute a aplicação em modo de desenvolvimento
 $ npm run dev 
 $ yarn dev
 
 # O servidor iniciará na porta:3000
 # Acesse http://localhost:3000 em qualquer navegador de sua máquina.
 ````

### Tecnologias<a id="tecnologias"></a> - <a href="#topo">Topo</a>
 As seguintes ferramentas foram usadas na construção do projeto:
 
  - [Node.js](https://nodejs.org/pt-br/)
  - [Typescript](https://www.typescriptlang.org/)
  - [SQLite](https://www.sqlite.org/index.html)
  - [TYPEORM](https://typeorm.io/#/)

### Autor <a id="autor"> </a> - <a href="#topo">Topo</a>

<a href="https://github.com/RicardoOliveiraFilho" style="text-decoration: none;">

<span> Feito por Ricardo Oliveira - Entre em contato! </span> 
</a>
