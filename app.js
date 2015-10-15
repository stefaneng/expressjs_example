var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Easy
// TODO: Send a message on /hi and /bye

// Harder
// TODO: return specialized message to user on route /hello/:user on POST

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
