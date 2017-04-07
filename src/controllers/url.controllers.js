import Schema_url from '../model/url_model'

let checkUrl = (url) => {
  let expr = /^(https?):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return expr.test(url)
}

let gen = () => {
  let id = Math.floor(Math.random() * 100000).toString()
  return id
}

let run_shorten = (req, res) => {
  let original_url = req.url.slice(5)
  let item = new Schema_url()
  if(checkUrl(original_url)){
    item.original_url = original_url
    item.short_url = process.env.APP_URL + gen()
    item.save((err) => {if(err){console.error(err)}})
  }
  res.json({"original_url": item.original_url, "short_url": item.short_url})
}

let redirectOrig = (req, res) => {
  let url = process.env.APP_URL + req.params.short
  if(url != process.env.APP_URL + 'favicon.ico') {
    Schema_url.find({short_url: process.env.APP_URL + req.params.short}, (err, result) => {
      if(err){
        console.error(err)
      }
      else{
        res.redirect(result[0].original_url)
      }
    })
  }
}

export default {run_shorten, redirectOrig}
