const express = require('express')
const app = express();
require("dotenv").config();


app.use(express.static('./dist/web_blog/browser'))

app.get((req,res,next)=>{

  
     res.sendFile('index.html',{root:'dist/web_blog/browser'})
})



app.get('/', (req,res,next)=>{

    res.sendFile('index.html',{root:'dist/web_blog/browser'})
})


app.get('/test', (req,res,next)=>{
    console.log('test');
    res.send({status:'ok'})
})

app.listen(parseInt(process.env.PORT) ,function(){

    console.log("⚡ Node app is running at localhost:" + (process.env.PORT));


})