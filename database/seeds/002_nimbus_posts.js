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
          post_img: "",
          user_id: 1,
          users_who_liked: [1, 2, 3, 4, 5],
          users_who_reposted: [1, 2, 3],
        },
        {
          id: 2,
          content: "second one for the count",
          post_img: "",
          user_id: 2,
          users_who_liked: [1, 2, 3],
          users_who_reposted: [2],
        },
        {
          id: 3,
          content: "We out here tho",
          post_img: "",
          user_id: 1,
        },
      ]);
    });
};
