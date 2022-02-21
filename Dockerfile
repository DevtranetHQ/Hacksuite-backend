# Here we are getting our node as Base image
FROM node:16.14.0-alpine

# Creating a new directory for app files and setting path in the container
WORKDIR /app

# Copying the package.json and yarn.lock file (contains dependencies)from project source dir to container dir
COPY ./yarn.lock /app
COPY ./package.json /app

# installing the dependencies into the container
RUN yarn install

# copying the source code of Application into the container dir
COPY . /app

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 5000

# command to run within the container
CMD ["yarn", "start"]