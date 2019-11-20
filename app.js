
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

 // les middlewares
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.set('views',__dirname +'/views');
app.use(bodyParser.json());


    app.get('/',(req, res) => {
       res.render('index.ejs');
      });

    app.get('/about',(req, res) => {
        res.render('about.ejs');
       });  

    app.get('/blog-detail',(req, res) => {
       res.render('blog-detail.ejs');
      });

    app.get('/blog',(req, res) => {
        res.render('blog.ejs');
       });   
       
    app.get('/contact',(req, res) => {
        res.render('contact.ejs');
       });  

    app.get('/gallery',(req, res) => {
        res.render('gallery.ejs');
       });   

    app.get('/reservation',(req, res) => {
        res.render('reservation.ejs');
       });  

    app.get('/menu',(req, res) => {
        res.render('menu.ejs');
       });   
  app.listen(3000, () => {
    console.log('le serveur ecoute sur le port 3000');
  });