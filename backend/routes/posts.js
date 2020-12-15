const express = require('express')

let router = express.Router()
let Post = require('../models/post')

// Pegar todos os posts
router.get('/get', async (req, res) => {
    const posts = await Post.find({});
    try {
      res.status(200).send(posts);
    } catch (err) {
      res.status(501).send(err);
    }
});

// Pegar um post pelo ID
router.get('/post/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
  
      if (!post) res.status(404).send("Nenhuma postagem encontrada.")
      res.status(200).send(post)
    } catch (err) {
      res.status(501).json({message: err})
    }
})

// Pegar um post pelo ID do usuário
router.get('/author/:id', async (req, res) => {
  try {
    const posts = await Post.find({author_id: req.params.id})

    if (!posts) res.status(404).send("Nenhuma postagem encontrada.")
    res.status(200).send(posts)
  } catch (err) {
    res.status(501).json({message: err})
  }
})

// Pegar um post pelo assunto
router.get('/topic/:topic', async (req, res) => {
  try {
    const posts = await Post.find({topics_slugs: req.params.topic})

    if (!posts) res.status(404).send("Nenhuma postagem encontrada.")
    res.status(200).send(posts)
  } catch (err) {
    res.status(501).json({message: err})
  }
})

// Remover um post
router.delete('/delete/:id', async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id)
  
      if (!post) res.status(404).send("Nenhuma postagem encontrada.")
      res.status(200).send()
    } catch (err) {
      res.status(501).json({message: err})
    }
})

// Criar um post
router.post('/create', function(req,res,next) {
  let post = new Post({
    title: req.body.title,
    description: req.body.description,
    topics: req.body.topics,
    topics_slugs: slugifyArr(req.body.topics), 
    imageURL: req.body.imageURL,
    creation_date: Date.now(),
    author_name: req.body.author_name,
    author_id: req.body.author_id,
  })

  let promise = post.save()

  promise.then(function(doc) {
    return res.status(201).json(doc)
  })

  promise.catch(function(err) {
    return res.status(501).send(err)
  })
})

const slugifyArr = (arr) => {
  let formatted = []

  arr.forEach(element => {
    formatted.push(slugifyStr(element))
  });

  return formatted;
}

function slugifyStr (str) {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  let from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  let to = "aaaaaeeeeiiiioooouuuunc------";

  for (let i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return str;
}

module.exports = router;