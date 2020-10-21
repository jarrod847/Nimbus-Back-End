exports.up = function (knex) {
  return knex.schema.createTable("postComments", (comments) => {
    comments.increments("id");
    comments.string("content", 255).notNullable();
    comments.integer("likes");
    comments.integer("reposts");
    comments.string("img");
    comments
      .integer("user_id")
      .unsighned()
      .notNullable()
      .references("id")
      .inTable("user")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("postComments");
};
