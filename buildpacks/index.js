const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send({'message':'Hello world'})
})

var port = process.env.PORT || '3000';
app.listen(port)