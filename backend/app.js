const express = require('express');
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors');
app.use(express.json())
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({
    origin:process.env.URL,
    credentials:true,
}))
const port = process.env.PORT || 5000
const authRouter = require(path.join(__dirname,'routes/auth.router.js'))
const taskRouter = require(path.join(__dirname,'/routes/task.router.js'))

// session
app.use(session({
  secret: process.env.SESSION_SECRET, // Used to sign the session ID cookie
  resave: false,                         // Prevents resaving session if unmodified
  saveUninitialized: false,              // Prevents storing empty sessions
  cookie: { 
    maxAge: 60000 * 600,                  // Cookie expiration time in milliseconds (1 hour)
    secure: process.env.NODE_ENV === "production",                       // Set to true if using HTTPS
    httpOnly: true                       // Prevents client-side JS from reading the cookie
  }
}));

app.get('/',(req,res)=>{
    res.send("working");
}

app.use('/api/auth',authRouter)
app.use('/api/nexus',taskRouter)

app.listen(port,(req,res)=>{
    console.log(`server running on ${port}`);
})
