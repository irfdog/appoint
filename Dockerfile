FROM node:lts-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install > /dev/null 2>&1
COPY . .
ENV API_URL=http://api.myapp.com/
EXPOSE 3000
RUN addgroup appoint-frontend && adduser -S -G appoint-frontend appoint-frontend
USER app
CMD ["npm", "start"]
