const express=require('express')
const app=express()
//post
app.use(express.urlencoded({ extended: true }))
const router=require('./router')
//路由
app.use('/',router)

app.listen(8888,()=>{
    console.log(8888);
})