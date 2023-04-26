# cervejaria-nodeJS
As seguintes etapas devem ser concluidas para iniciar o projeto:

- Ter o Nodejs instalado
- Ter o Postman instalado para poder tratar os requests(não obrigatório, mas facilita o tratamento dos requests)
- Ter um database criado no ElephantSQL

Em seguida, após criar um database no ElephantSQL, clique nele e vá até a guia BROWSER. Lá digite as queries contidas
no arquivo queries.sql(esse que está dentro do repositório) no campo "SQL Query" e clique em execute.

Vá então até a guia DETAILS e copie o codigo referênciado em URL, esse será o endereço que a api usará para acessar o
banco de dados.

Volte para o repositório e procure pelo arquivo "env-example" e renomeie ele para ".env". Dentro dele insira a endereço
copiado no elephantSQL dentro das aspas da varíavel URL, deixando algo parecido com isso:

- URL="postgres://fhjshdj:hdih2uubiUIHuih902@babar.db.elephantsql.com/fhjshdj"

Após concluir as etapas acima, é necessário abrir a pasta do projeto em um prompt de sua prefêrencia e digitar os seguintes comandos:

- npm i express pg body-parser dotenv nodemon
- npm start

Em seguida abra o Postman ou um navegador da sua prefêrencia e então trate dos requests pelo endereço:

- http://localhost:3000/cervejaria
