const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../user/user-model.js");
const { jwtSecret } = require("./user-secret");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "incorrect credentials" });
    });
});

router.post("/login", (req, res) => {
  let { displayName, password } = req.body;

  Users.findBy({ displayName })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ user, token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get users" });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to get user" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Users.editUser(id, req.body)
    .then(() => {
      res.status(200).json(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not change user information" });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
