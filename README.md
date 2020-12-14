# Trabalho Final de Desenvolvimento Web
**Autor:** Danilo Pinheiro Vilhena  
**Matrícula:** 1920422

## Para rodar o projeto:
### Backend
~~~
cd backend/ && npm start
~~~
### Frontend
~~~
cd frontend/ && ng serve
~~~

## Usuários para teste:
**Admin:** admin | 12345  
**Usuário normal:** danilo.vilhena@gmail.com | 123

## Rotas e passos para cada um dos requisitos funcionais do projeto: 

### Requisito Funcional 01 
**Descrição:** O sistema deve ser capaz **cadastrar usuários** que poderão realizar postagens no blog  
**Rota:** /cadastro

### Requisito Funcional 02
**Descrição:** O sistema deve ser capaz de listar os usuários cadastrados e permitir a **alteração** e a **exclusão** dele   
**Exclusão:** No perfil do administrador, ir para a rota /admin/usuarios ou clicar no link usuários do header  
**Alteração:** No perfil do usuário, ir para a rota /editar_perfil ou clicar no ícone do usuário no canto superior direito e depois em configurações  

### Requisito Funcional 03
**Descrição:** O sistema deve ser capaz de **criar postagens** para um blog    
**Passos:** No perfil do usuário, clicar no ícone do usuário no canto superior direito e depois em escrever um post    
**Rota:** /escrever_post

### Requisito Funcional 04
**Descrição:** O sistema deve ser capaz de exibir as postagens cadastradas no blog de forma cronológica, da mais recente para a mais antiga. Deve-se utilizar um sistema de paginação quando ele possuir mais do que 10 mensagens na tela  
**Rota:** / ou /inicio

### Requisito Funcional 05
**Descrição:** O sistema deve ser capaz de exibir a postagem mais recente como destaque na tela principal, exibindo o título, um pequeno resumo e a imagem de forma diferenciada (layout em aberto)  
**Rota:** / ou /inicio

### Requisito Funcional 06
**Descrição:** O sistema deve possuir um menu lateral que organize as postagens por ano e mês de publicação  
**Rota:** / ou /inicio

### Extras
* Tags de assunto nos posts para poder agrupá-los de acordo com o assunto na página **/assuntos** e no aside da página **/inicio**
* Mecanismo de busca nessas tags de assunto na página **/assuntos**
* Mecanismo de busca pelo título dos posts 
* Funcionalidade de **lembre-se de mim** no login do usuário (salvando o e-mail para as próximas vezes que entrar)