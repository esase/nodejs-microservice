FROM node:14

# the main app dir in the image
WORKDIR /app

# copy both the `package.json` and `package-lock.json` to the image
COPY ./package*.json /app/

# install dependecies in the image
RUN npm install

# copy everything from the app to the image
COPY ./app /app/

# open the port
EXPOSE 8080

# run the web server
CMD [ "node", "server.js" ]