import express from 'express'
import bodyParser from 'body-parser'

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI, (err) => {
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
