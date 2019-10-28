const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const timestamp = require('log-timestamp');

const { Client } = require('pg');
const connectionString = 'postgres://mlgbrjxqombdxt:9e8239afd7e3387f3d3b60a8be19dd7c21f2494ff0814b1970f760199db5c05f@ec2-107-20-198-176.compute-1.amazonaws.com:5432/da5spegutq022d';
const client = new Client({
    connectionString: connectionString,
    ssl: true
});

//await connection
client.connect();

//EJS view engine (think of it sort of like PHP but it doesnt make you want the sweet release of death)
app.set('view engine', 'ejs');

//sets staticContent folder as the root for all static content (ie .../staticContent/app.js is accessed as ./app.js)
app.use(express.static('staticContent'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//when a GET request is made for the root we render the index.ejs page passing the API key in to be rendered as an HTML string response
app.get('/', (req, res) => res.render('index', { apikey: "" + process.env.API_KEY, page: "map" }, function(err, html) {
    res.send(html);
}));

app.get('/favorites', (req, res) => res.render('favs', { page: "fav" }, function(err, html) {
    res.send(html);
}));

app.get('/login', (req, res) => res.render('login', { page: "login" }, function(err, html) {
    res.send(html);
}));

app.get('/settings', (req, res) => res.render('settings', { page: "settings" }, function(err, html) {
    res.send(html);
}));

app.get('/places.json', (req, response) => {
    const out = client.query('SELECT * FROM locations')
        .then(res => res.rows)
        .then(row => response.send(row));
});

/*
 * TODO: Use user ID as query param
 */
app.get('/datafile.json', (req, response) => {
    const out = client.query({
        rowMode: 'array',
        text: 'SELECT getfavloc($1);',
        values: ['1']})
        .then(res => response.send(JSON.parse(res.rows[0])));
});

app.get('/categories.json', (req, response) => {
    const out = client.query({
        rowMode: 'array',
        text: 'SELECT DISTINCT "category" FROM "favoriteLocations" WHERE "userId" = ($1);',
        values: ['1']})
        .then(res => response.send(res.rows));
});

app.post('/favorites', (req, response) => {
    const out = client.query({
        rowMode: 'array',
        text: 'SELECT addPlace($1, $2, $3)',
        values: ['1', req.body.place, req.body.category]})
        .catch(e => console.log(e))
        .finally(response.redirect('/favorites'));
})

//start the server
app.listen(port, () => console.log(`Listening on port ${port}!`));