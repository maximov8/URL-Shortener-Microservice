import express from 'express'
import bodyParser from 'body-parser'

import mongoose from 'mongoose'
let uri = 'mongodb://newbee:newbee@ds155080.mlab.com:55080/url_shortener'
mongoose.connect(process.env.MONGODB_URI || uri, (err) => {
  if (err) {
    console.error(err)
  }
  console.log("Everything is fine")
})

let app = express()
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, () => {
  console.log("Run Forest, Run")
})
