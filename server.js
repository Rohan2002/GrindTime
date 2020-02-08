const express = require('express');
// const https = require('https');
// const path = require('path');
// const fs = require('fs');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


const router = express.Router();

app.get('/findAPI', callD_alembert);

function callD_alembert(req, res) {
  // using spawn instead of exec, prefer a stream over a buffer
  // to avoid maxBuffer issue
  var spawn = require('child_process').spawn;
  var process = spawn('python', ['./app.py',
    req.query.funds, // starting funds
    req.query.size, // (initial) wager size
    req.query.count, // wager count — number of wagers per sim
    req.query.sims // number of simulations
  ]);
  process.stdout.on('data', function (data) {
    res.send(data.toString());
  });
}
app.use("/api", router);

app.listen(8080,()=>{
    console.log("server started at port 8080")
})
