const router = require('express').Router()
const {
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
} = require('./postController')

router.get('/',getAllPost)

router.get('/:postId',getSinglePost)

router.post('/',createPost)

router.put('/:postId',updatePost)

router.delete('/:postId',deletePost)

module.exports = router

