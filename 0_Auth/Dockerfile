#Usa la configuracion de docker hub
FROM node:10.16.2

#Copia los archivos desde la raiz hacia la carpeta usr
COPY package*.json ./
COPY . ./

#Instala las dependencias de Node
RUN npm install

CMD [ "npm", "start" ]
