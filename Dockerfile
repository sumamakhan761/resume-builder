FROM node:20-alpine

WORKDIR /usr/src/app

# Install OpenSSL
RUN apk add --no-cache openssl

COPY package.json package-lock.json ./

COPY prisma ./prisma

RUN npm install --legacy-peer-deps

RUN npx prisma generate

COPY . .

RUN npx prisma generate

RUN npm run build


EXPOSE 3000


CMD ["npm", "run", "start"]