Frontend and Backend off Two Web 


# Tecnologias utilizadas:
- React JS
- Express
- NodeJS
- Styled Components
- Sequelize
- Docker
- Insomnia

**Para rodar o servidor:**

 - Crie um Container do Docker com o comando: **docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11**
 - Após isso é só clonar o Server e rodar Yarn para instalar as dependências necessárias.
 - Utilize o comando **yarn dev** para rodar o servidor
 - Por fim, rodar **yarn sequelize db:migrate** para rodar todas as migrations.
 
 **Frontend**
 
 - Apenas dar um clone no repositório **app** e rodar yarn para instalar todas as dependências necessárias.
