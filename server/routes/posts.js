import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello From Posts.');
});

export default router;