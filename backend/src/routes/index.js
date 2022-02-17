// 3rd parties
const { Router } = require("express");

// Application
const {
    createUsers, 
    registerUser,
    loginUsers,
    loginNewUsers,
    listUSers,
    responseQuestions
} = require('../controllers/index')


const router = Router();

router.post("/create-users", createUsers.cadastroBot);
router.post("/register-user", registerUser.cadastroBot);
router.post("/login", loginNewUsers.login), 
router.post("/response-questions", responseQuestions.responseQuestions)
router.get("/list", listUSers.listUsers)
router.get("/list-new-users", listUSers.listNewUsers)

module.exports = router;