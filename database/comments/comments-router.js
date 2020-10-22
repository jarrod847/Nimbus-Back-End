const router = require("express").Router();
const Comments = require("./comments-model");

router.get("/comments", (req, res) => {
  Comments.allComments()
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get comments" });
    });
});

router.post("/sendcomment", (req, res) => {
  Comments.addPost(req.body)
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "could not comment" });
    });
});

router.delete("/dltComment", (req, res) => {
  Comments.deleteComment(req.params.id)
    .then(() => {
      res.status(200).json({ message: `deleted comment` });
    })
    .catch((error) => {
      console.log(console.log(error));
      res.status(500).json({ message: "counld not delete comment" });
    });
});
