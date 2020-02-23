const express = require("express");
const app = express();
const cors = require("cors");
//bodyparser
const bodyParser = require("body-parser");
const logger = require("morgan");

//Api router
const router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.post("/getdata", function(req, res) {
  var Humidity = req.body.Humidity;
  var Lat = req.body.Lat;
  var Long = req.body.Long;
  var Temp = req.body.Temp;
  var spawn = require("child_process").spawn;
  var process = spawn("python3", ["./app.py", Temp, Humidity, Lat, Long]);
  process.stdout.on("data", function(data) {
    res.status(200).send(data.toString());
  });
});


app.use("/api", router);
app.listen(8080, function() {
  console.log("server: port 8080");
});
