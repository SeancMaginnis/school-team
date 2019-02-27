let Schools = require('../models/school')
let router = require('express').Router()
let Classrooms = require('../models/classroom')


router.get('', (req, res, next) => {
  Schools.find({})
    .then(schools => res.send(schools))
    .catch(err => res.status(400).send(err))
})

router.get('/:id', (req, res, next) => {
  Schools.findById(req.params.id)
    .then(school => res.send(school))
    .catch(err => res.status(400).send(err))

})

router.get('/:id/classrooms', (req, res, next) => {
  Classrooms.find({ school: req.params.id })
    .then(classrooms => res.send(classrooms))
    .catch(err => res.status(400).send(err))
})

router.post('', (req, res, next) => {
  Schools.create(req.body)
    .then(school => res.send(school))
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
  Schools.findByIdAndDelete(req.params.id)
    .then(() => res.send('Success, school has been bombed'))
    .catch(err => res.status(400).send(err))
})



module.exports = { router }


