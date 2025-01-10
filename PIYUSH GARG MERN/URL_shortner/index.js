const express = require('express')
const path = require('path')
const cookieParser = require("cookie-parser")

const connectToMongoDB = require('./connect');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');
const { restrictToLoggedInUserOnly, checkAuth } = require('./middleware/auth');

const PORT = 8001;
const app = express()

connectToMongoDB() // connecting to MONGODB

app.use(express.json())  // middleware to convert all req to JSON
app.use(express.urlencoded({ extended: false })) //form data support
app.use(cookieParser())

app.set("view engine", "ejs") //setiing up VIEW wngine to EJS
app.set("views", path.resolve('./views'))  // defining the path of the VIEW

//ROUTES
//inject middleware restrictToLoggedInUserOnly 
app.use("/url", restrictToLoggedInUserOnly, urlRoute)  // importing backend URL route functionality
app.use("/user", userRoute) // importing backend USER route functionality
app.use("/", checkAuth, staticRoute)  // importing client/view route functionality

app.listen(PORT, () => console.log('server started'))