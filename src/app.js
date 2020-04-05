import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import fs from 'fs'
import https from 'https'
import config from '../webpack.dev.config.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import bodyParser from 'body-parser'
import PostModel from './models/postModel'
// import controller from './controllers/postController'

const app = express(),
DIST_DIR = __dirname,
HTML_FILE = path.join(DIST_DIR, 'index2.html'),
compiler = webpack(config);

app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err })
  }
})

app.post('/', async (req, res) => {
  const post = new PostModel({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err })
  }
})

app.get('/:postId', async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await PostModel.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
})

app.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await PostModel.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
})

app.patch(':/postId', async (req, res) => {
  try {
    const changedPost = await PostModel.updateOne(
      { _id: req.params.postId },
      { $set: {
          title: req.body.title
        }
      }
    );
    res.json(changedPost);
  } catch (err) {
    res.json({ message: err })
  }
})

// app.use('/', postRouter);

// app.get('/', (req, res, next) => {
//   compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
//     if (err) {
//       return next(err)
//     }
//     res.set('content-type', 'text/html')
//     res.send(result)
//     res.send()
//   })
// })

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