let express = require("express");
let app = express();

let x = app.get("/", (request, response) => {
  response.send("Express JS");
});
app.listen(3000);

module.exports = x;
