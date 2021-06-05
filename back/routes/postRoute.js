const { Router } = require("express");
const { Post } = require("../models/post");
const { isValidObjectId } = require("mongoose");
const postRouter = Router();

// GET api/post/:postIid
postRouter.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    if (!isValidObjectId(postId))
      return res.status(400).send("포스트를 찾을 수 없습니다.");
    const post = await Post.findOne({ _id: postId });
    return res.send({ post });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

// GET api/post
postRouter.get("/", async (req, res) => {
  try {
    let posts = await Post.find({});
    posts = posts.reverse();
    return res.send({ posts });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

// POST api/post
postRouter.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const { user, password, title, content } = req.body;
    if (
      typeof user !== "object" ||
      typeof user.name !== "string" ||
      typeof user.email !== "string"
    )
      return res.status(400).send("user 정보를 확인해주세요.");
    if (typeof password !== "string")
      return res.status(400).send("password 정보를 확인해주세요.");
    if (typeof title !== "string")
      return res.status(400).send("title 정보를 확인해주세요.");
    if (typeof content !== "string")
      return res.status(400).send("content 정보를 확인해주세요.");
    let post = await new Post({ ...req.body });
    await post.save();
    return res.send({ post });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err.message });
  }
});

module.exports = { postRouter };
