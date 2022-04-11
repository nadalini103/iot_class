const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let messages = [];

app.use(bodyParser.json());
app.use(express.static('public'))

app.post('/', function(req, res) {
  let message = JSON.stringify(req.body);
  messages.push(message);
})

app.get('/messages', function(req, res) {
  res.json(messages);
})

app.listen(80, function() { console.log("App listening on port 80") })
