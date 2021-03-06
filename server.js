const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs-extra');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

fs.ensureDir(__dirname + '/client/public/files', err => {
    console.log(err) // => null
    // dir has now been created, including the directory it is to be placed in
})

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join(__dirname, 'client', 'public', 'files')));

require('./consts/consts')(app, express, path);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(port, () => {
    console.log("listening")
});