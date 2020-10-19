exports.getAllPost = (req,res)=>{
    console.log(req.query);//query string
    res.send('Render all post')
}

exports.getSinglePost = (req,res)=>{
    res.send(`Render all post = ${req.params.postId}`)
}

exports.createPost = (req,res)=>{
    res.send('Create New post')
}

exports.updatePost = (req,res)=>{
    res.send(`Update post = ${req.params.postId}`)
}

exports.deletePost = (req,res)=>{
    res.send(`Delete post = ${req.params.postId}`)
}