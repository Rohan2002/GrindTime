const express = require('express');
// const https = require('https');
 const path = require('path');
// const fs = require('fs');
const logger = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());

// app.use(express.static(path.join(__dirname, 'client/public')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


const router = express.Router();

router.post("/getData", (req, res) => {
    res.send("Hello World")
})

app.use("/api", router);

app.listen(8080,()=>{
    console.log("server started at port 8080")
})
