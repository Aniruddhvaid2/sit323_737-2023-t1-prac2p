var express = require('express')

var app = express()

app.get('/', function (req, res){

// respond with HI,this is Aniruddh Vaid & this is my first web server. when a get request is made.
res.send('HI,this is Aniruddh Vaid & this is my first web server.' )

})
// the particular port
app.listen(3000)