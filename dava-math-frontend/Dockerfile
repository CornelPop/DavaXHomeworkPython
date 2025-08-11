FROM node:20
WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY package.json ./
COPY package-lock.json ./
RUN npm install         
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]