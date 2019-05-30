// server.js
const express = require('express');

const app = express();
const path = require('path');

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build/index.html'));
// });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;

// app.listen(process.env.PORT || 4000, function(){
//     console.log('Your node js server is running');
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Authors' haven frontend application listening on port(${port})`);
});
