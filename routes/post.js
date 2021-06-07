const express = require('express');
const { getPosts, createPost}= require('../controllers/post');
const { userById }= require('../controllers/user');
const { requireSignin}= require('../controllers/auth');
const { createPostValidator} = require('../validator');

const router = express.Router();

router.get('/', getPosts);

router.post('/post', requireSignin, createPostValidator, createPost);

// any route containing  : userId, our app will first execute userById()
router.param('userId', userById)

module.exports = router;
