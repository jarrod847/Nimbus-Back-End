exports.up = function (knex) {
  return knex.schema.createTable("user", (user) => {
    user.increments();
    user.string("displayName", 18).notNullable().unique();
    user.string("password", 255).notNullable();
    user.string("bio", 255);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
