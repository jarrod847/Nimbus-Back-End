const router = require("express").Router();
const Posts = require("./post-model");

router.get("/posts", (req, res) => {
  Posts.allPosts()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get posts" });
    });
});

router.post("/sendpost", (req, res) => {
  Posts.addPost(req.body)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "could not post" });
    });
});

router.delete("/postdlt", (req, res) => {
  Posts.deletePost(req.params.id)
    .then(() => {
      res.status(200).json({ message: `deleted post` });
    })
    .catch((error) => {
      console.log(console.log(error));
      res.status(500).json({ message: "counld not delete" });
    });
});

router.get("/userposts/:id", (req, res) => {
  Posts.findPostsByUser(req.params.id)
    .then((postsbyuser) => {
      res.status(200).json(postsbyuser);
    })
    .catch((error) => {
      res.status(500).json({ message: "could not get users posts" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Posts.updatePost(id, req.body)
    .then((changes) => {
      res.status(200).json(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not update post" });
    });
});

module.exports = router;
