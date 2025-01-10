const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    const addDbUsers = await User.find({})
    const html = `<ul>${addDbUsers.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`;
    res.send(html)
}
async function handleGetUserById(req, res) {
    const searchedUser = await User.findById(req.params.id)
    if (searchedUser) {
        res.json(searchedUser)
    }
    else {
        res.status(404).json({ "msg": "user not found !!" })
    }
}
async function handleAddUser(req, res) {
    const body = req.body;
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        gender: body.gender,
        email: body.email,
        jobTitle: body.job_title
    })
    console.log(result)
    res.status(200).json({ status: "successfully added !!" })
}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleAddUser
}