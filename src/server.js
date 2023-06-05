'use strict';
const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("hello everyone");
});

app.get('/data',stamper, (req, res) => {
    res.json({
        id: 1,
        name: "Savana",
        email: "savanahamood@gmail.com",
        time: req.timestamp,
    })
})


function stamper(req,res,next){
    req.timestamp= new Date();
    next();
}
function start(port) {
    app.listen(port, () => {
        console.log(`server is listen on ${port}`)
    });
}
module.exports = {
    start: start,
    app: app,
}