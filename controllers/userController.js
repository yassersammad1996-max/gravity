const User = require("../models/User");

const users = [
  new User(1, "Alice", "alice@example.com"),
  new User(2, "Bob", "bob@example.com"),
];

exports.getApiStatus = (req, res) => {
  res.json({
    message: "API is running",
  });
};

exports.getUsers = (req, res) => {
  res.json(users);
};
