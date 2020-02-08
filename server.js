const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');
const app = express();
const cors = require('cors');
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", router);

app.listen(8080,()=>{
    console.log("server started at port 8080")
})
