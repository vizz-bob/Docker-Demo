# --- Same conventions used in the "Dockerize a Node.js App" video ---
FROM node:20-alpine

WORKDIR /home/app

# Copy dependency files first so Docker can cache the npm install layer
COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
