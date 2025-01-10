const express = require('express')
const app = express();
const userRouter = require('./routes/user')
const connectMongoDB = require('./connections')
const { logReqRes } = require('./middlewares/index')

//connection to mongoDB
connectMongoDB()

//MIDDLEWARE PREDEFINED [ here for CONTENT type]
app.use(express.urlencoded({ extended: false })) // to tell express the type of body will recieve
// app.use(require('body-parser').urlencoded({ extended: false }));
app.use(express.json())

app.use(logReqRes('./log.txt'))

// ROUTES
app.use("/api/users", userRouter)


app.listen(8000, () => console.log("Server Started"))