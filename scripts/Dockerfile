FROM node:2
#create a app directory
WORKDIR /home/user/nodeJS
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
#Bundle App Source
COPY . .
#Expose Port
EXPOSE 8080
#Command to Run app
CMD [ "npm" "start" ]