const express = require('express');
const fs = require('fs');

// const indexRouter = require('./routes/index')

const app = express();


app.set('view-engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', (request, response) => {
    response.render('index.ejs', { color: 'bleu'});
})

app.get('/login', (request, response) => {
    response.render('login.ejs');
})

app.get('/register', (request, response) => {
    response.render('register.ejs');
})

app.post('/register', (request, result) => {
    console.table(req.body);
})

// app.use('/', indexRouter);

app.listen(8080, '0.0.0.0');