exports.up = function (knex) {
  return knex.schema.createTable("user", (user) => {
    user.increments("id");
    user.string("displayName", 18).notNullable();
    user.string("password", 255).notNullable();
    user.string("bio", 255);
    user.string("user_img");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
