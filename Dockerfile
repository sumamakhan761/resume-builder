FROM node:20-alpine

WORKDIR /usr/src/app

# Install OpenSSL
RUN apk add --no-cache openssl

# Define build arguments
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ARG CLERK_SECRET_KEY
ARG POSTGRES_PRISMA_URL
ARG BLOB_READ_WRITE_TOKEN

# Set environment variables from build arguments
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}
ENV POSTGRES_PRISMA_URL=${POSTGRES_PRISMA_URL}
ENV BLOB_READ_WRITE_TOKEN=${BLOB_READ_WRITE_TOKEN}

COPY package.json package-lock.json ./

COPY prisma ./prisma

RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000


CMD ["npm", "run", "start"]