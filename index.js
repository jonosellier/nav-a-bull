const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('staticContent'));
app.get('/', (req, res) => res.render('index', { foo: "foo" }));

app.listen(port, () => console.log(`Listening on port ${port}!`));