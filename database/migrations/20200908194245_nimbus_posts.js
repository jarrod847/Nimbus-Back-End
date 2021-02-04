exports.up = function (knex) {
  return knex.schema.createTable("posts", (posts) => {
    posts.increments("id").unique();
    posts.string("content", 255).notNullable();
    posts.specificType("users_who_liked", "integer ARRAY");
    posts.specificType("users_who_reposted", "integer ARRAY");
    posts.string("post_img");
    posts
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts");
};
