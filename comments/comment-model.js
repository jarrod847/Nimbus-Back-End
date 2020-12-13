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
