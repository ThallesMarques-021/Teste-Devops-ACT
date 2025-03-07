# Teste-Devops-ACT
#Teste realizado com intuito de construi uma aplicação onde os requisitos são :

1. O pipeline deve ser ativado sempre que um novo commit for feito na branch main.
2. O pipeline deve executar os seguintes passos:
o Instalar as dependências do projeto.
o Executar testes unitários.
o Construir a aplicação.
o Armazenar o artefato como release do github
o Usar funcionalidade environment do github para restringir a aprovação do
deploy para um usuário ou grupo do github
3. Se todos os passos acima forem bem-sucedidos, o pipeline deve fazer o deploy da
aplicação em um ambiente de teste.
4. O pipeline deve notificar o desenvolvedor via e-mail se o processo de CI/CD falhar em
qualquer etapa.



Segue abaixo um desenho da Arquitetura da Pipeline



![image](https://github.com/user-attachments/assets/bd3471ca-bc9d-496d-b04a-7397e6111123)


