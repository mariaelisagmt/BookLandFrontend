# Construir o projeto
FROM node:18 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração do projeto
COPY package*.json ./
COPY tsconfig*.json ./

# Instalar as dependências
RUN npm install

# Copiar o código-fonte para o contêiner
COPY . .

# Construir o projeto Angular
RUN npm run build -- --configuration production

# Etapa 2: Configurar o ambiente de execução
FROM nginx:alpine

# Copiar os arquivos de build para o diretório do Nginx
COPY --from=builder /app/dist/my-app /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
