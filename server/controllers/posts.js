import express from 'express';
import mongoose from 'mongoose';

import PostCharacter from '../models/postCharacter.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postCharacters = await PostCharacter.find();
                
        res.status(200).json(postCharacters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostCharacter.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, selectedFile, } = req.body;

    const newPostCharacter = new PostCharacter({ title, selectedFile, })

    try {
        await newPostCharacter.save();

        res.status(201).json(newPostCharacter );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, selectedFile, } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, selectedFile, _id: id };

    await PostCharacter.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostCharacter.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export default router;