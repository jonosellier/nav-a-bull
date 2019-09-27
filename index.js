const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const timestamp = require('log-timestamp');

dotenv.config();

//EJS view engine (think of it sort of like PHP but it doesnt make you want the sweet release of death)
app.set('view engine', 'ejs');

//sets staticContent folder as the root for all static content (ie .../staticContent/app.js is accessed as ./app.js)
app.use(express.static('staticContent'));
app.all("*", function(req, resp, next) {
    console.log("Requested " + req.originalUrl); // do anything you want here
    next();
});

//when a GET request is made for the root we render the index.ejs page passing the API key in to be rendered as an HTML string response
app.get('/', (req, res) => res.render('index', { apikey: process.env.API_KEY }, function(err, html) {
    res.send(html);
}));


//start the server
app.listen(port, () => console.log(`Listening on port ${port}!`));
