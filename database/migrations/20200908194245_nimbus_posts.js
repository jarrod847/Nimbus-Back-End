exports.up = function (knex) {
  return knex.schema.createTable("posts", (posts) => {
    posts.increments("id");
    posts.string("content", 255).notNullable();
    posts.integer("likes");
    posts.integer("reposts");
    posts.string("img");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts");
};
