const { Router } = require("express");
const { Post } = require("../models/post");
const postRouter = Router();

// GET api/post
postRouter.get("/", async (req, res) => {
  try {
    let posts = await Post.find({});
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
