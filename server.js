const express = require('express')
const app = express();
require("dotenv").config();


app.use(express.static('./dist/web_blog'))

app.get('/*', (req,res,next)=>{
    res.sendFile('index.html',{root:'dist/web_blog'})
})

app.listen(process.env.PORT || 8080,function(){
    console.log("Node app is running at localhost:" + (process.env.PORT));

})