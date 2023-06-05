'use strict';
const express = require("express");
const app = express();
const stamper = require('./middlewares/stamper');
const notFoundHandler=require('./handlers/404');
const errorHandler=require('./handlers/500');


app.get('/', (req, res) => {
    res.send("hello everyone");
});

app.get('/data', stamper, (req, res) => {
    res.json({
        id: 1,
        name: "Savana",
        email: "savanahamood@gmail.com",
        time: req.timestamp,
    })
})


app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`server is listen on ${port}`)
    });
}
module.exports = {
    start: start,
    app: app,
}