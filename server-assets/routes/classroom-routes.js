let Classrooms = require('../models/classroom')
let router = require('express').Router()
let Teachers = require('../models/teacher')


router.get('', (req, res, next) => {
  Classrooms.find({})
    .then(classrooms => res.send(classrooms))
    .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res, next) => {
  Classrooms.findById(req.params.id)
    .then(classroom => res.send(classroom))
    .catch(err => res.status(400).send(err))
})

router.get('/:id/teachers', (req, res, next) => {
  Teachers.find({ classroom: req.params.id })
    .then(teachers => res.send(teachers))
    .catch(err => res.status(400).send(err))
})

router.post('', (req, res, next) => {
  Classrooms.create(req.body)
    .then(classroom => res.send(classroom))
    .catch(err => res.status(400).send(err))
})

router.put('/:id', async (req, res, next) => {
  try {
    let classroom = await Classrooms.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.send(classroom)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete("/:id", (req, res, next) => {
  Classrooms.findByIdAndDelete(req.params.id)
    .then(() => res.send('Success, classroom has been bombed'))
    .catch(err => res.status(400).send(err))
})

module.exports = { router }








