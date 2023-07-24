FROM node:20-alpine3.17
WORKDIR /home/node/assignment
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 4001