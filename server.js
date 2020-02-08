const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const router = express.Router();
const port = process.env.PORT || 3001;

//app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.post("/putData", (req, res) => {
  const { Lat, Long, Humidity, Temp } = req.body;
  console.log("Rohan");
  console.log(Lat);
  return "Rohan";
});
app.use("/api", router);
app.listen(port, function() {
  console.log("Runnning on " + port);
});
