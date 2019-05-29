const express = require('express');
const path = require('path');

const app = express();

// 中间件的资源公开
app.use(express.static(path.join(__dirname, '../dist')));

// health check url
app.get('/api/capabilities', function(req, res, next) {
  res.status(200).send('capabilities');
});

const server = app.listen(9999, function() {
  const host = server.address().address;
  const port = server.address().port;
  /* eslint-disable no-console */
  console.log('Example app listening at http://%s:%s', host, port);
});
