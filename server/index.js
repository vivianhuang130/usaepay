const
  // dotenv tries to load a .env file's variables and adds them to process.env
  // with {silent: true}, no error will be thrown if .env does not exist:
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/usaepay',
  port = process.env.PORT || 3001

  mongoose.connect(mongoUrl, (err) => {
  console.log(err || "Connected to MongoDB.")
})

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hello')
})


app.listen(port, (err) => {
  console.log(err || `Server running on ${port}.`)
})
