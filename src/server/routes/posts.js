import express from 'express'
const postRouter = express.Router();
import PostModel from '../../models/postModel'

postRouter.get('/', (req, res) => {
  res.send('Working');
})

postRouter.post('/', async (req, res) => {
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

export default postRouter;