# Commands

## Create network
docker network create mongo-network

## Start mongodb
docker run -d --name mongo-demo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --net mongo-network mongo

## start mongo-express
docker run -d --name mongo-express-demo -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongo-demo --net mongo-network mongo-express
