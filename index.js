//bunch of crap

let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000
// let cors = require('cors')

require('./server-assets/db/gearhost-config')

server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

//middleware

// let whitelist = ['http://localhost:8080']
// let corsOptions = {
//   origin: function (origin, callback) {
//     let originIsWhitelisted = whitelist.indexOf(origin) !== -1
//     callback(null, originIsWhitelisted)
//   },
//   credentials: true
// }
// server.use(cors(corsOptions))

//routes

let schoolRoutes = require('./server-assets/routes/school-routes')
let teacherRoutes = require('./server-assets/routes/teacher-routes')
let studentRoutes = require('./server-assets/routes/student-routes')
let classroomRoutes = require('./server-assets/routes/classroom-routes')

server.use('/api/schools', schoolRoutes.router)
server.use('/api/classrooms', classroomRoutes.router)
server.use('/api/teachers', teacherRoutes.router)
server.use('/api/students', studentRoutes.router)

server.use('*', (req, res, next) => {
  res.status(404).send('No Matching Routes')
})

server.listen(port, () => {
  console.log('server is running on port', port)
})