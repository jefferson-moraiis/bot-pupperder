// 3rd parties
const express = require("express");

// Application
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const json = require("../package.json");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.status(200).json({
    name: json.name,
    version: json.version,
    status: json.status,
  });
});
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Bot iniciado 🤖 `);
});
