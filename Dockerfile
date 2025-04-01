FROM node:18

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["bash", "starter.sh"]
