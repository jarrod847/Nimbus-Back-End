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
  return db("posts as p")
    .join("user as u", function () {
      this.on("u.id", "=", "p.user_id");
    })
    .select(
      "u.displayName",
      "u.user_img",
      "p.id",
      "p.user_id",
      "p.content",
      "p.post_img",
      "p.users_who_liked",
      "p.users_who_reposted"
    );
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
  return db("posts as p")
    .join("user as u", function () {
      this.on("u.id", "=", "p.user_id");
    })
    .where("user_id", UserId)
    .select(
      "u.displayName",
      "u.user_img",
      "p.id",
      "p.user_id",
      "p.content",
      "p.users_who_liked",
      "p.users_who_reposted",
      "p.post_img"
    );
}

function updatePost(id, changes) {
  return db("posts").where({ id }).update(changes);
}
