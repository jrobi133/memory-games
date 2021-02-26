import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

router.use((req, res) => res.sendFile(path.join(__dirname, "../../client/public/index.html")));

export default router;