exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        {
          id: 1,
          content: "that's a good one",
          likes: 2,
          reposts: 1,
          img: "",
          user_id: 1,
          post_id: 1,
        },
        {
          id: 2,
          content: "gottem",
          likes: 1,
          reposts: 3,
          img: "",
          user_id: 2,
          post_id: 1,
        },
        {
          id: 3,
          content: "for the second one",
          likes: 20,
          reposts: 0,
          img: "",
          user_id: 2,
          post_id: 2,
        },
      ]);
    });
};
