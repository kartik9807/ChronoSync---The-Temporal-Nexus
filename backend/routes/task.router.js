const express = require('express')
const router = express.Router()
const clearanceGuard = require('../middleware/clearanceGuard.js');
const islogedIn = require('../middleware/islogedIn.js')
const {getTask,deleteTask,createTask} = require('../controllers/task.controller.js')

router.get('/tasks',islogedIn,getTask)
router.post('/tasks',islogedIn,clearanceGuard,createTask)
router.delete('/tasks/:id',islogedIn,clearanceGuard,deleteTask)

module.exports = router