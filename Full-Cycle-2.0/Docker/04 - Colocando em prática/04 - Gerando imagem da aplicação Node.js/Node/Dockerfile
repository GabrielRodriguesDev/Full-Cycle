#Imagem node:15
FROM node:15

#Configurando o caminho abaixo como caminho de trabalho
WORKDIR /usr/src/app

#Copiando tudo que está na minha pasta local para a workdir do container
COPY . .

#Expondo a porta 3000
EXPOSE 3000

#Executando o comando node index.js para subir um servidor
CMD [ "node", "index.js" ] 