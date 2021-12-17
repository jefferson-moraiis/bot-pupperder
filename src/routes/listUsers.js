const users = require('../../users.json')



const listUsers = (req,res) => {

    const userEmail = Object.keys(users).map(function(_) { return users[_]; })

    let list = []
    for (var i = 0; i < users.length; i++) {
        list.push(userEmail[i].email );
    }

        return res.status(200).json({'qtd':list.length,'email':list})

}
module.exports ={
    listUsers
}