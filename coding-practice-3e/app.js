let express = require("express");

let app = express();

let x = app.get("/", (request, response) => {
  let date = new Date();
  let reqDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(reqDate);
});

app.listen(3000);

module.exports = x;
