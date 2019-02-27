let Teacher = require('../models/teacher')
let router = require('express').Router()
let student = require('../models/student')


router.get('', (req, res, next) => {
  Teacher.find({})
    .then(teachers => res.send(teachers))
    .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res, next) => {
  Teacher.findById(req.params.id)
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})



router.get('/:id/student', (req, res, next) => {
  Teacher.find({ student: req.params.id })
    .then(students => res.send(students))
    .catch(err => res.status(400).send(err))
})

router.post('', (req, res, next) => {
  Teacher.create(req.body)
    .then(teacher => res.send(teacher))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', async (req, res, next) => {
  try {
    let teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(teacher)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete("/:id", (req, res, next) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.send('teacher has been executed'))
    .catch(err => res.status(400).send(err))
})

module.exports = { router }