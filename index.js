const express = require('express');
const app = express();
const port = 3000;

//Appdata object to hold api keys and other as-needed information
const appData = {
    apiKey: process.env.MAPS_API_KEY
};

//EJS view engine (think of it sort of like PHP but it doesnt make you want the sweet release of death)
app.set('view engine', 'ejs');

//sets staticContent folder as the root for all static content (ie .../staticContent/app.js is accessed as ./app.js)
app.use(express.static('staticContent'));

//when a GET request is made for the root we render the index.ejs page passing the API key in to be rendered as an HTML string response
app.get('/', (req, res) => res.render('index', { apikey: appData.apiKey }, function(err, html) {
    console.log(`Key = ${process.env.MAPS_API_KEY}`);
    res.send(html);
}));


//start the server
app.listen(port, () => console.log(`Listening on port ${port}!`));