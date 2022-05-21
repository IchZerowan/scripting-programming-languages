const express = require("express");
const service = require("./service")
const app = express();


app.use("/", (req, res) => {
    service.getProxiedData().then(data => {
        res.send(data);
        res.end();
    });
});

module.exports = app;