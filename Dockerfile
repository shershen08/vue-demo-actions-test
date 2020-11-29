FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

LABEL js=vue

# install app dependencies
COPY package.json ./
#COPY package-lock.json ./
RUN npm install --silent
RUN npm install @vue/cli -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "run", "serve"]