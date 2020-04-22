const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Council = require("./routes/Council")
app.use("/Council",Council)

app.listen(6000, () => {
    console.log("server is listening 6000.........")
});