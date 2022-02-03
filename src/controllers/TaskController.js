const Task = require('../models/Task')
exports.info = function (req,res) {
    res.send({ message: 'API-TODOLIST', add_task: '/addtask', get_task: '/gettask/:id', get_all_tasks: '/getalltask', edit_task: '/editask/:id',  delete_task: 'deletetask/:id', delete_all_tasks: '/deletealltask' })
}

// Criando uma nova tarefa no banco de dados
exports.create = async function(req, res) {
    const {
        name,
        date,
        status
    } = req.body

    try {
        const newTask = await Task.create({
            name:name,
            date:date,
            status:status
        })

        return res.send(newTask)
    } catch(err){
        console.log(err)
        return res.send({ message: 'Não foi possível inserir tarefa no banco de dados.'})
       
    }
    
}

exports.indexOne = async function (req, res) {
    try {

        const task = await Task.findById({_id:req.params.id})

        return res.send(task)

    } catch (err) {

        console.log(err)
        return res.send({ message:'Erro ao exibir tarefa.'})
    }

}

// Listando todas as tarefas
exports.indexAll = async function (req, res) {

    try {
        const allTasks = await Task.find()

        return res.send(allTasks)
    } catch (err) {
        console.log(err)
        return res.send({ message:'Erro ao exibir todas as tarefas.'})
    }
}

// Atualizando uma tarefa
exports.update = async function (req, res) {

    const {
        name,
        date,
        status
    } = req.body

    try {
        const updateTask = await Task.findOneAndUpdate({_id:req.params.id}, {
            name:name,
            date:date,
            status:status
        })

        console.log('------------------')
        console.log('Tarefa atualizada com sucesso')
        console.log('------------------')

        const taskup = await Task.findById(req.params.id).exec()

        return res.send(taskup)

    } catch (err) {
        console.log(err)
        return res.send({ message: 'Não foi possível atualizar a tarefa.'})
    }
}

// Deletando uma Tarefa
exports.delete = async function (req, res) {
    try {

        const deleteTask = await Task.findByIdAndDelete({_id:req.params.id})
        
        return res.send({ message: 'Tarefa deletada com sucesso'})

    } catch (err) {

        console.log(err)
        return res.send({ message: 'Não foi possível deletar a tarefa.'})
    }

}

// Deletando todas as tarefas
exports.deleteAll = async function (req, res) {
    try {
        const deleteAllTask = await Task.deleteMany()

        return res.send({ message:'Tarefas deletadas com sucesso!' })
    } catch (err) {
        return res.send({ message:'Não foi possível deletar todas as tarefas.'})
    }
}

