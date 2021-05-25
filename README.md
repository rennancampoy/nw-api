# Developer Test

### Sobre
<p align="center">Simples API para enviar e listar mensagens. Construída com Node, React, Docker and Postgres.</p>

### Uso

*É necessário ter instalado Docker e Node na máquina.*

- Subir container do postgres
```
docker run --name postgres -e POSTGRES_PASSWORD=nw1234 -e POSTGRES_DB=nw-messages -d -p 5432:5432 postgres
```

- Inicializar os serviços no diretório do projeto
```
npm start
```
_

- Envio de mensagems: 
	 -	Realizar requisição POST para o endereço ``http://localhost:1330/message`` com o body contendo os seguintes campos:
	 	
```		
to (string)
target_id (string)
media (boolean)
message (string)
```

- Listar as mensagens:
	-	Abrir a página http://localhost:1330/message no navegador
