import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import fs from 'fs'
import https from 'https'
import config from '../../webpack.dev.config.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import postRouter from '../server/routes/posts'
import bodyParser from 'body-parser'


const app = express(),
DIST_DIR = __dirname,
HTML_FILE = path.join(DIST_DIR, 'index.html'),
compiler = webpack(config);

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use('/post', postRouter);

app.get('/', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.send()
  })
})

mongoose.connect(process.env.DB_CONNECT, () => {
  console.log('connected to db');
})

const PORT = process.env.PORT || 8080;

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
}, app)
  .listen(PORT, () => {
    console.log('I am working');
  })