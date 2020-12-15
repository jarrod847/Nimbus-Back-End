exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          id: 1,
          content: "Whats good fools",
          likes: 50,
          reposts: 5,
          img: "",
          user_id: 1,
        },
        {
          id: 2,
          content: "second one for the count",
          likes: 5,
          reposts: 1,
          img: "",
          user_id: 1,
        },
        {
          id: 3,
          content: "We out here tho",
          likes: 10,
          img: "",
          reposts: 0,
          user_id: 1,
        },
      ]);
    });
};
