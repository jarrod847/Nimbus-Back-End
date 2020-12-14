const router = require("express").Router();
const Comments = require("./comment-model");

router.get("/", (req, res) => {
  Comments.allComments()
    .then((comms) => {
      res.status(200).json(comms);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get comments" });
    });
});

router.post("/add", (req, res) => {
  const id = req.body.post_id;
  Comments.addComment(id, req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not add comment to post" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Comments.findCommentsForPost(req.params.id)
    .then((comms) => {
      res.status(200).json(comms);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get comments for post" });
    });
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  Comments.findCommentsByUser(req.params.id)
    .then((comms) => {
      res.status(200).json(comms);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get comments by User" });
    });
});

module.exports = router;
