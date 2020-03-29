import express from 'express'
const postRouter = express.Router();
// import PostModel from '../../models/posts'

postRouter.get('/', (req, res) => {
  res.send('Working');
})

postRouter.post('/', (req, res) => {
  console.log(req.body);
})

export default postRouter;