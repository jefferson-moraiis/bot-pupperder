// 3rd parties
const { Router } = require("express");

// Application
const createUsers = require("./createUsers");
const singUpUsers = require("./cadastroUsers")
const loginUsers = require("./loginUsers")
const resQuestions = require("./responseQuestions")

const router = Router();

router.post("/create-users", createUsers.cadastroBot);
router.post("/singUp", singUpUsers.cadastroBot);
router.post("/login", loginUsers.loginBot), 
router.post("/responseQuestions", resQuestions.responseQuestions)

module.exports = router;