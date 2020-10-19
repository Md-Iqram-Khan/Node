const express = require('express')
const morgan = require('morgan')
const userRouter = require('./router')
const postRouter = require('./postRoute')

const app = express()


//using thirdparty middleware
//It is using globaly all the route
app.use(morgan('dev'))

app.use('/user',userRouter)

app.use('/posts',postRouter)

//Express route and url Paremeters

// app.get('/product/:prodID',(req,res)=>{
//     // console.log(req.params);
//     res.send(`I am Listening ${req.params.prodID}`)
// })


//using middleware in a specefic route
// app.get('/contact',morgan('dev'),(req,res) => {
//     res.send('<h1>I am contact page</h1>')
// })

//Create our first custom middleware

// function customMiddleware(req,res,next){
//     if (req.url === '/help'){
//         res.send('<h1>Sorry, This page is blocked by Admin</h1>')
//     }
//     next()
// }

// app.use(customMiddleware)

//


//creating some route
// app.get('/help',(req,res) => {
//     res.send('<h1>I am help page</h1>')
// })

// app.get('/about',(req,res) => {
//     res.send('<h1>I am about page</h1>')
// })

//creating root route.root route must be in the below of all route
app.get('/',(req,res) => {
    res.send('<h1>I am listening</h1>')
})

//creating route for non valid request

// app.get('*',(req,res) => {
//     res.send('<h1>404 Not Found</h1>')
// })

//creating server
const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})

