import express from 'express';
import {getPosts, createPost} from "../controllers/posts.js";

const router = express.Router();

//localhost:3000/posts
router.get('/', getPosts);
router.get('/', createPost);

export default router; // to import that router on other side (index.js)