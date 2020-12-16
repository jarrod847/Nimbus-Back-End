const db = require("../database/config");

module.exports = {
  allComments,
  addComment,
  findCommentsByUser,
  findCommentsForPost,
  findCommentById,
  deleteComment,
};

function allComments() {
  return db("postComments");
}

function findCommentById(id) {
  return db("postComments").where({ id }).first();
}

function deleteComment(id) {
  return findCommentById(id).del(id);
}

function addComment(postId, payload) {
  return db("postComments as comms")
    .join("posts", function () {
      this.on("posts.id", "=", "comms.post_id");
    })
    .insert(payload)
    .select("content")
    .where(postId, payload.post_id);
}

function findCommentsForPost(post_id) {
  return db("postComments").where("post_id", post_id);
}

function findCommentsByUser(user_id) {
  return db("postComments").where("user_id", user_id);
}
