import express from 'express'
import bodyParser from 'body-parser'

import mongoose from 'mongoose'
import ctl from './controllers/url.controllers'

let app = express()
app.use(bodyParser.json())

let uri = 'mongodb://newbee:newbee@ds155080.mlab.com:55080/url_shortener'
mongoose.connect(process.env.MONGODB_URI || uri, (err) => {
  if (err) {
    console.error(err)
  }
  console.log("Everything is fine")
})

app.get('/new/:url*', ctl.run_shorten)
app.get('/:short', ctl.redirectOrig)

app.listen(process.env.PORT || 3000, () => {
  console.log("Run Forest, Run")
})
