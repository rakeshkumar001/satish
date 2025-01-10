const { v4: uuidv4 } = require("uuid");
const USER = require("../models/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await USER.create({
        name, email, password
    })
    return res.redirect("/"); //will redirect to homepage
}
async function handleUserLogin(req, res) {
    const { email, password } = req?.body;
    const user = await USER.findOne({ email, password })
    if (!user)
        return res.render("login", {
            error: "Invalid Username or Password",
        });

    // const sessionId = uuidv4();   //uncomment to use it with HASH MAP
    // setUser(sessionId, user);      //uncomment to use it with HASH MAP
    // res.cookie("uid", sessionId);

    const token = setUser(user)
    res.cookie("uid", token);
    return res.redirect("/");
}
module.exports = {
    handleUserSignup,
    handleUserLogin
}