
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Prathima',
        course: 'Full Stack Development'
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
