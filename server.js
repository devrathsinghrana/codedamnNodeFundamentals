const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// Middleware to parse application/json
app.use(bodyParser.json());

app.use("/", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html", (err) => {
    if (err) {
      res.status(err.status).end();
    } else {
      res.end();
    }
  });
});

app.post("/submit", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.send({ username, password });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
