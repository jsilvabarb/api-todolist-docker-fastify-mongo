
const fastifyPlugin = require('fastify-plugin')
const mongoose = require('mongoose');

async function dbConnector(fastify, options, next) {
  const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;

  const op = {
    useNewUrlParser: true,
    connectTimeoutMS: 1000,
  };

  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

  await mongoose.connect(url, op)
    .then( function(data) {
    fastify.log.info('MongoDB is connected');

    fastify.decorate('mongo', data)

    
    }).catch(function(err) {
      fastify.log.error(err);
  })
    .catch( function(err) {
    
      console.log('------------------------')
      console.log(err);
      console.log('------------------------')
  });
  next()
}

module.exports = fastifyPlugin(dbConnector)





























// async function dbConnection (fastify, options, next) {

// }

// module.exports=fastifyPlugin(dbConnection)