const express = require('express');
const router = express.Router();

const Task = require('../models/task');

const { json, Router } = require('express');


router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.json(task)
})

router.post('/', async (req, res) => {
    const { title, description } = req.body
    const task = new Task({ title, description})
    console.log(task)
    await task.save();
    res.json({status: 'Task saved'})
})


router.put('/:id', async (req, res) => {
    const { title, description } = req.body
    const newTask = {title, description}
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({status: 'TASK UPDATED'})
})

router.delete('/:id', async (req, res) => { 
    await Task.findByIdAndDelete(req.params.id)
    res.json({status: 'Task deleted'})
})

module.exports = router;