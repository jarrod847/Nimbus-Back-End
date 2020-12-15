const db = require("../database/config");

module.exports = {
  allPosts,
  addPost,
  findPost,
  findPostById,
  deletePost,
  findPostsByUser,
  updatePost,
};

function allPosts() {
  return db("posts");
}

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

function findPostsByUser(UserId) {
  return db("posts").where("user_id", UserId);
}

function updatePost(id, changes) {
  return db("posts").where({ id }).update(changes);
}
