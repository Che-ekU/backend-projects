let express = require("express");
let app = express();

let x = app.get("/", (request, response) => {
  response.send("Home Page");
});

let y = app.get("/about", (request, response) => {
  response.send("About Page");
});

app.listen(3000);

module.exports = x;

exports.value = y;
