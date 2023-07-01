// just to make download express structure 
const Express = require("express")
const app = Express()

app.get( "/", (req, res, next) => {
  res.send('connect my api here now')
  console.log('testing here now')
})

app.listen(8080 , () => {
    console.log(`listing the port here more one time ${8080}`)
})