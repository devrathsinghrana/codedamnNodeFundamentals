const express = require("express");
const app = express();

// if we use other method than get for / then when hitting this url in browser we will get not found as browser will search for only get method end point rest of the methods can be called manually using fetch request.
// app.get("/", (req, res) => {
//     res.send("hello world").end();
// })

app.put("/", (req, res) => {
  res.send("hello world").end();
});

app.get("/what-is-my-method", (req, res) => {
  res.send("GET").end();
});

app.post("what-is-my-method", (req, res) => {
  res.send("POST").end();
});

app.put("what-is-my-method", (req, res) => {
  res.send("PUT").end();
});

app.delete("what-is-my-method", (req, res) => {
  res.send("DELETE").end();
});

app.patch("what-is-my-method", (req, res) => {
  res.send("PATCH").end();
});

app.listen(1337, console.log("listening on port 1337"));
