// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const { APP_PORT } = process.env


fastify.register(require('./routes/Task'))
fastify.register(require('./config/db'))



// Run the server!
const start = async () => {
  try {
    await fastify.listen(APP_PORT, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
