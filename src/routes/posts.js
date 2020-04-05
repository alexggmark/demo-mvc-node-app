import express from 'express'
const postRouter = express.Router();
import PostModel from '../../models/postModel'

postRouter.get('/', async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err })
  }
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

postRouter.get('/:postId', async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await PostModel.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
})

postRouter.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await PostModel.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
})

postRouter.patch(':/postId', async (req, res) => {
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

export default postRouter;