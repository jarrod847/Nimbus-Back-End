const db = require("../database/config");

module.exports = {
  addPost,
  findPost,
  findPostById,
  deletePost,
};

function findPost() {
  return db("posts").select("id", "content");
}

function addPost(post) {
  return db("posts")
    .insert(post, "id")
    .then(([id]) => {
      return findPostById(id);
    });
}

function findPostById(id) {
  return db("posts").where({ id }).first();
}

function deletePost(id) {
  return findPostById(id).del(id);
}
