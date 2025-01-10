const express = require("express");
// to solve CORS error on client 
const cors = require("cors")

const PORT = process.env.PORT || 3001;
// initializing app
const app = express();

// to solve CORS error on client 
app.use(cors())
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });// Should be json format
});
app.get("/hello", (req, res) => {
    res.json("Hello  ");// ex to pass a string
});
app.get("/name", function (req, res) {
    res.send({ "name": "Admin" }) // Should be json format
})

//   The listen method runs a web server on port 3001.
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

