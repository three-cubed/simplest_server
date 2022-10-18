const express = require('express');
const app = express();
app.use(express.static(__dirname)); // To access stylesheet.css
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/other', (req, res) => {
    res.render('other');
});

app.listen(process.env.PORT || 3333, () => {
    console.log('listening to 3333');
});
