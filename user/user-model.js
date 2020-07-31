const db = require("../database/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  deleteUser,
};

function find() {
  return db("user").select("id", "displayName");
}

function findBy(filter) {
  return db("user").where(filter);
}

function add(user) {
  return db("user")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("user").where({ id }).first();
}

function deleteUser(id) {
  return findById(id).del(id);
}
