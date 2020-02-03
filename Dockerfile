FROM node:13
WORKDIR /
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:13-alpine
WORKDIR /
COPY --from=builder / ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]