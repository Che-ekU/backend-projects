let express = require("express");

let app = express();

let x = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

x.listen(3000);

module.exports = x;
