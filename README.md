# Developer Test

### Sobre
<p align="center">Simples API para enviar e listar mensagens. Construída com Node, React, Docker and Postgres.</p>

<h4 align="center"> 
	Instalação
</h4>

*É necessário ter instalado Docker e Node na máquina.*

- Subir container do postgres
docker run --name postgres -e POSTGRES_PASSWORD=nw1234 -e POSTGRES_DB=nw-messages -d -p 5432:5432 postgres

- Inicializar o backend
npm start

