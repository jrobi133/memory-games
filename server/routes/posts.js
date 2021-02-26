const path = require('path');
const router = require("express").Router();
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/posts.js'); 

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

router.use((req, res) => res.sendFile(path.join(__dirname, "../../client/public/index.html")));

module.exports = router;