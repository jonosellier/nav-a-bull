const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const timestamp = require('log-timestamp');
const hasher = require('password-hash');
const bodyParser = require('body-parser');

//EJS view engine (think of it sort of like PHP but it doesnt make you want the sweet release of death)
app.set('view engine', 'ejs');

//sets staticContent folder as the root for all static content (ie .../staticContent/app.js is accessed as ./app.js)
app.use(express.static('staticContent'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.all("*", function(req, res, next) {
    console.log("Requested " + req.originalUrl); // do anything you want here
    //if (process.env.DEV_MODE != "true" && !req.secure) res.redirect('https://' + req.headers.host + req.url);
    next();
});

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

app.post('/doLogin', (req, res) => {
     //get form data
    const user = req.body.lguser;
    const pwHash = hasher.generate(rq.body.lgpw);
    //DB query for username and hashed password here
    if(hasher.verify(pwHash, "db hashed password here")){
        //login stuff
        console.log("Login success!");
    } else {
        console.log("incorrect");
    }
    res.send("Response HTML here")
});

app.post('/doSignUp', (req, res) => {
    console.log(req.body);
    const user = req.body.suuser;
    //todo add db query to confirm username isnt taken
    const pw = req.body.supw;
    const pwc = req.body.supwc;
    console.log("Pass: "+pw+"\nConf: "+pwc);
    if(pw == pwc) res.send("Good");
    else res.send("Bad");
});

//start the server
app.listen(port, () => console.log(`Listening on port ${port}!`));