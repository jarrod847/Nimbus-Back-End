exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user").insert([
        {
          id: 1,
          displayName: "Rodney",
          password: "abc123!",
          bio: "it's gunna be lit my dudes",
          img:
            "https://3.bp.blogspot.com/_pYhtd5F751g/R0I3lFiGTeI/AAAAAAAAAlU/Drr9fBJ27mE/s320/Chicken+Joe.jpg",
        },
        {
          id: 2,
          displayName: "TimtheMan",
          password: "abc123!",
          bio: "Guess again, fool",
          img:
            "https://www.indiewire.com/wp-content/uploads/2020/06/intro-1568212992.jpg",
        },
      ]);
    });
};
