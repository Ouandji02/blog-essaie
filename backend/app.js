const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const body_parser = require('body-parser');
const Post = require('./Models/Post')
 
mongoose.connect('mongodb+srv://Thierry:02Thierry@myfirstdatabase.or7dy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express()

app.use(cors())
app.use(body_parser.urlencoded({extended : false}))
app.use(body_parser.json())

app.get('/all-blogs',(req,res) =>{
    Post.find()
    .then((result) =>{
        res.send(result)
    })
    .catch(err => {
     res.send(err)
    })

})
app.post('/post',(req,res) =>{
    console.log(req.body.nom, req.body.message)
    const blog = new Post({
      nom : req.body.nom,
      message: req.body.message
    })
    blog.save()
    .then((result)=> {
      res.send(result)
    })
    .catch(err => {
      res.send(err);
    })
})

module.exports = app