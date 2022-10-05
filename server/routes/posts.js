import express from 'express';

const router = express.Router();

//localhost:3000/posts
router.get('/', (req, res) => {
    res.send('SENT!');
});

export default router; // to import that router on other side (index.js)