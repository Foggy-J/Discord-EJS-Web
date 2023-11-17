const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/profile', (req, res) => {
    res.render('pages/profile', {
        dsc_name: 'Foggy',
        dsc_desc: 'Discord description.',
        verified: 'Verified',
        email: 'test@test.com',
        premium: 'Nitro'
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`); 
});