const express = require('express');
const app = express();
const fs = require('fs');

app.get('/calendrier', (req,res) =>{
    fs.readFile(__dirname + "/" + "events.json", 'utf8', (err,data)=>{
        res.header("Access-Control-Allow-Origin","*");
        console.log("data sent: \n" + data);
        res.end(data);
    })
});

var server = app.listen(3030, () => {
console.log("running");
});