const express = require('express')
const app=express()


app.set('view engine','ejs')
app.use(express.static('public'))

let freeRoute = require('./routes/free')
app.use('/',freeRoute)

let port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('app started on port ',port)
})