let mongoose = require('mongoose')

const connectionString = 'mongodb://schooldata1:schoolPass!@den1.mongo1.gear.host:27001/schooldata1'

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})


connection.on('error', err => {
  console.log('[DATABASE ERROR]', err)
})



connection.once('open', () => {
  console.log('SUCCESS!!')
})