const { Router } = require('express');
const { Post } = require('../models/post');
const { isValidObjectId } = require('mongoose');
const postRouter = Router();

// GET api/post/:postIid
postRouter.get('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    if (!isValidObjectId(postId))
      return res.status(400).send('포스트를 찾을 수 없습니다.');
    const post = await Post.findOne({ _id: postId });
    return res.send({ post });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

// GET api/post
postRouter.get('/', async (req, res) => {
  try {
    let { page } = req.query;
    page = parseInt(page);
    let postsCount = await Post.find({}).countDocuments();
    let posts = await Post.find({})
      .sort({ createdAt: -1 })
      .skip(page * 5)
      .limit(5);
    return res.send({ posts, postsCount });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

// POST api/post
postRouter.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { user, password, title, content } = req.body;
    if (
      typeof user !== 'object' ||
      typeof user.name !== 'string' ||
      typeof user.email !== 'string'
    )
      return res.status(400).send('user 정보를 확인해주세요.');
    if (typeof password !== 'string')
      return res.status(400).send('password 정보를 확인해주세요.');
    if (typeof title !== 'string')
      return res.status(400).send('title 정보를 확인해주세요.');
    if (typeof content !== 'string')
      return res.status(400).send('content 정보를 확인해주세요.');
    let post = await new Post({ ...req.body });
    await post.save();
    return res.send({ post });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

// 수정,삭제,읽기시 필요한 비밀번호 확인 따로 빼기

// PUT api/post/:postId
postRouter.put('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    if (!isValidObjectId(postId))
      return res.status(400).send('게시글이 존재하지 않습니다.');
    const { name, email, password, title, content } = req.body;
    const updatedPost = {};
    if (name || email) updatedPost.user = { name, email };
    if (password) updatedPost.password = password;
    if (title) updatedPost.title = title;
    if (content) updatedPost.content = content;
    const post = await Post.findByIdAndUpdate(postId, updatedPost, {
      new: true,
    });
    return res.send({ post });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

// DELETE api/post/:postId
postRouter.delete('/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    if (!isValidObjectId(postId))
      return res.status(400).send('게시글이 존재하지 않습니다.');
    const post = await Post.findOneAndDelete({ _id: postId });
    return res.send({ post });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

module.exports = { postRouter };
