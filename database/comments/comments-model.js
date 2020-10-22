const db = require("../database/config");

module.exports = {
  allComments,
  addComment,
  findComment,
  deleteComment,
  findCommentById,
};

function allComments() {
  return db("postComments");
}

function addComment(comment) {
  return db("postComments")
    .insert(comment, "id")
    .then(([id]) => {
      return findCommentById(id);
    });
}

function findComment() {
  return db("postComments").select("id", "content");
}

function findCommentById(id) {
  return db("postComments").where({ id }).first();
}

function deleteComment(id) {
  return findCommentById(id).del(id);
}
