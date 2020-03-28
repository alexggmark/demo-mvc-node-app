const path = require('path')
const express = require('express')
const fs = require('fs')
const https = require('https')

const app = express(),
            DIST_DIR = __dirname;
            HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
})

const port = process.env.port || 8080;

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
}, app)
  .listen(port, () => {
    console.log('I am working');
  })