#just specify the image docker

FROM node:18-alpine

# defined the dependence that i need to my project
WORKDIR  /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ ./ 

#default command
CMD [ "npm", "start"]
