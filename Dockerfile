FROM node:23.5.0-alpine AS builder

WORKDIR /app/my-app

COPY my-app/package.json my-app/package-lock.json ./

RUN npm install

COPY my-app ./
COPY .env.local .env.local

ENV NEXT_PUBLIC_BASE_URL_API=http://api:8080/api/v1
ENV NEXT_PUBLIC_AUTH_PAGE=http://localhost:3000


RUN npm run build

FROM node:23.5.0-alpine AS runner

WORKDIR /app/my-app

# Copy only the necessary files from builder
COPY --from=builder /app/my-app/package.json ./
COPY --from=builder /app/my-app/node_modules ./node_modules
COPY --from=builder /app/my-app/public ./public
COPY --from=builder /app/my-app/.next ./.next

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]