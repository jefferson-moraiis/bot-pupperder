// 3rd parties
const faker = require("faker");

// Application
const fs = require("fs");

const cadastroBot = async (req, res) => {
  let { numberOfUsers } = req.body;
  let users = [];
  let data = Date.now();

  try {
    for (let id = 0; id < numberOfUsers; id++) {
      console.log(id);
      let firstName = faker.name.firstName();
      let lastName = faker.name.lastName();
      let email = faker.internet.email();
      users.push({
        id: id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        creatAt: new Date(data).toLocaleDateString("pt-br"),
      });
    }
    console.log(users);
    fs.writeFile(
      "backend/src/db/new_users.json",
      JSON.stringify(users, null, 2),
      function (err) {
        if (err) throw err;
      }
    );

    return res.status(201).json(users);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  cadastroBot,
};
