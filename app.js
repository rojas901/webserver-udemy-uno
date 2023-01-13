const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public2'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Carlos Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Carlos Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Carlos Rojas',
    titulo: 'Curso de Node'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(process.env.PORT, () => {
  console.log(`Listen on port ${process.env.PORT}`);
});