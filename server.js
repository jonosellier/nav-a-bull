const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const timestamp = require('log-timestamp');

const bodyParser = require('body-parser');
const hasher = require('password-hash');

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

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

app.post('/doLogin', (req, res) => {
    //get form data
    const user = req.body.lguser;
    const pwHash = hasher.generate(rq.body.lgpw);
    //DB query for username and hashed password here
    if (hasher.verify(pwHash, "db hashed password here")) {
        //login stuff
        console.log("Login success!");
    } else {
        console.log("incorrect");
    }
    res.send("Response HTML here");
});

app.post('/doSignUp', (req, res) => {
    console.log(req.body);
    const user = req.body.suuser;
    //todo add db query to confirm username isnt taken
    const pw = req.body.supw;
    const pwc = req.body.supwc;
    console.log("Pass: " + pw + "\nConf: " + pwc);
    if (pw == pwc) res.send("Good");
    else res.send("Bad");
});

app.get('/places.json', (req, response) => {
    const out = client.query('SELECT * FROM locations')
        .then(res => res.rows)
        .then(row => response.send(row));
});

//start the server
app.listen(port, () => console.log(`Listening on port ${port}!`));