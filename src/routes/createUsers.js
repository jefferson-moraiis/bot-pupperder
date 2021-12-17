// 3rd parties
const faker = require('faker')
const moment = require('moment')

// Application
const fs = require('fs')

const cadastroBot = async (req,res ) => {
    
    let {numberOfUsers} = req.body
    let users = []

    try {

      for (let id = 0; id < numberOfUsers; id ++) { 

        let firstName = faker.name.firstName() 
        let lastName = faker.name.lastName()
        let email = faker.internet.email()
            users.push ({ 
                "first_name": firstName, 
                "last_name": lastName, 
                "email": email 
            }) 
        }
        fs.writeFile(`db_users_${moment().format('YYYY-MM-DD')}.json`,JSON.stringify(users,null,2), function (err) {
            if (err) throw err;
        });
          return  res.status(201).json(users)

    } catch (error) {
        return  res.status(500).json({error: error})
    }

   
  };

module.exports ={
    cadastroBot
}