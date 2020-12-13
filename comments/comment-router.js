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

module.exports = router;
