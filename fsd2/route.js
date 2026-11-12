const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('welcome to express JS');
});
app.get('/about',(req,res)=>{
    res.send('This is about page');
});
app.get('/user/:id',(req,res)=>{
    res.send('User ID:'+req.params.id);
});
app.get('/search',(req,res)=>{
    const name=req.query.name;
    res.send('searching for:'+name);
});
app.get('/build-url',(req,res)=>{
    const url='/user/'+101;
    res.send('Built URL:'+url);
});
app.listen(3000,()=>{
    console.log('server running at http://localhost:3000');
});