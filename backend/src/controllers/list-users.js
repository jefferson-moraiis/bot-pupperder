const users = require(`../db/users.json`);
const newUser = require("../db/new_users.json");

const listUsers = (req, res) => {
  const userEmail = Object.keys(users).map(function (_) {
    return users[_];
  });

  let list = [];
  for (var i = 0; i < users.length; i++) {
    list.push(userEmail[i]);
  }

  return res.status(200).json(list);
};

const listNewUsers = (req, res) => {
  const userEmail = Object.keys(newUser).map(function (_) {
    return newUser[_];
  });

  let list = [];
  for (var i = 0; i < newUser.length; i++) {
    list.push(userEmail[i]);
  }

  return res.status(200).json(list);
};
module.exports = {
  listUsers,
  listNewUsers,
};
