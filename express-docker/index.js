// just to make download express structure 
const Express = require("express")
const app = Express()

app.get( "/", (req, res, next) => {
  res.send('connect my api here now')
  next('I am here 3000 port')
  console.log('testing here now')
})

app.listen(3000)