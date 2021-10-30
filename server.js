require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get("/api/whoami", (req, res) => {
  const ipaddress = req.ip;
  const software = req.headers["user-agent"];
  const language = req.headers["accept-language"];
  res.status(200).json({ ipaddress, language, software });
});

// listen for requests :)
app.listen(process.env.PORT || 8080);
