const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.user('/comments', commentRoutes);

module.exports = router;