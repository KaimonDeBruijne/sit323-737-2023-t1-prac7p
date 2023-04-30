const e = require('express')
var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.sendFile(__dirname + "/layout.html")
})



app.listen(3200)