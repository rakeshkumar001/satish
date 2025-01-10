const express = require("express");
// to solve CORS error on client 
const cors = require("cors")

const PORT = process.env.PORT || 3001;
// initializing app
const app = express();
fs = require('fs');  // NODE JS DEFAULT SCRIPT TO READ FILE
const replaceTemplate = require('./modules/replaceTemplate');

//read and store the data while initialization
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    'utf-8'
);
const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    'utf-8'
);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`,
    'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

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
});
app.get("/overview", function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);  // can be HTML Template
});
app.get("/", function (req, res) {
    res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello-world'
    })
    res.end('<h1> Page Not Found </h1>') // Should be json format
});

//   The listen method runs a web server on port 3001.
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

