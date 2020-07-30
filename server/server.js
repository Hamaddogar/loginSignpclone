
const express = require('express')
  let  db = require('./db/dbconfig')
const app = express()
 let User=  require('./Model/user')
var cors = require('cors')
var bodyParser = require('body-parser')


 
const port = 5000
app.use(cors())
app.use(bodyParser.json())

//Signup User
  app.use(require('./api/Signup/signup'))
  
  //Login User

  app.use(require('./api/login/login'))












app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server is running at:${port}`))