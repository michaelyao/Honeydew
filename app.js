var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var res = {};
  res.headers = request.headers;
  res.ip = request.ip;
  res.ips = request.ips;
  response.send(JSON.stringify(res));

});

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log("Listening on " + port);
});