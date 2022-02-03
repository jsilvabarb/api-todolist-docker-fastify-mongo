const TaskController = require('../controllers/TaskController')

async function routes(fastify, options) {
    fastify.get('/', async (req, res) => {
        return TaskController.info(req,res)
    })

    fastify.post('/addtask', async (req, res) => {
        return TaskController.create(req, res)
    })

    fastify.get('/gettask/:id', async (req, res) => {
        return TaskController.indexOne(req, res)
    })

    fastify.get('/getalltask', async (req, res) => {
        return TaskController.indexAll(req, res)
    })

    fastify.put('/editask/:id', async (req, res) => {
        return TaskController.update(req, res)
    })

    fastify.delete('/deletetask/:id', async (req, res) => {
        return TaskController.delete(req, res)
    })
    
    fastify.delete('/deletealltask', async (req, res) => {
        return TaskController.deleteAll(req, res)
    })
}

module.exports = routes;