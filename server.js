let express = require('express');
let app = express();

var path = require('path')

app.get('/index.html', (req, res) => {
	res.sendFile(path.resolve('./DesktopClient/index.html'));
});

app.get('/bundle.js', (req, res) => {
	res.sendFile(path.resolve('./DesktopClient/bundle.js'));
});

app.listen(8080, function (err) {
  if (err) {
    throw err;
  }
  console.log('express server running');
});

