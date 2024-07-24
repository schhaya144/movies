const express = require('express')

const app=express()

app.get('/',(req,res)=>{
    res.status(200).send("hello world ")
})

const PORT=8080

app.listen(PORT, ()=>{
    console.log("listen at port number",(PORT))
})


module.exports=app;