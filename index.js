var express = require('express')
var app = express()


// function rootCall(req,res){

//     res.send('thank you')
// }


app.get('/',(req,res)=>{
    res.send("thank you calling me")
})

app.listen(3000,()=>console.log("lishtih"))