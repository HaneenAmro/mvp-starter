var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
var path =require('path');

var app = express();
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/comments', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/comments', (req, res) => {

  const result = req.body;
  console.log(result);
  items.postComment( result, (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }

  });
});

app.get('/dryHair', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/frizzyHair', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/hairLoss', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/splitEnds', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

