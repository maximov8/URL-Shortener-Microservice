import mongoose from 'mongoose'
let Schema = mongoose.Schema

let shorten_url = new Schema({
  original_url: String,
  short_url: String
})

export default mongoose.model("Url", shorten_url);
