const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" directory
// This will allow us to serve our index.html file and any other static assets like CSS
// by default express will look for static files in public directory
// so we can use express.static without specifying the directory 
// but we can also specify the directory explicitly
// app.use(express.static(path.resolve(__dirname, "public")));  
// or we can use the below line to serve static files from public directory
// but we can also use a different route to serve static files like /static
// so that we can access them using /static/index.html
// and we can also use a different directory to serve static files like /assets
// so that we can access them using /assets/index.html
// if we write only /static then it will find index.html file in public directory
// and serve it when we hit /static in browser and if index.html file is not present then it will give 404 error and we not to explicitly write the route for other static files like css or js
// so we can access them using /static/style.css or /static/script.js
app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  // we can send js or css files also but we have better alternatives for them
  res.sendFile(path.resolve(__dirname, "public/index.html"), (err) => {
    if (err) {
      res.status(err.status).end();
    } else {
      res.end();
    }
  });
});

app.listen(1337, () => {
  console.log("listening on port 1337");
});
