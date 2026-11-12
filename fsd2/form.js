const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send(`
        <h2>Student Form</h2>
        <form action="/submit" method="POST">
            Name:<input type="name" name="name" required><br><br>
            Email:<input type="email" name="email" required><br><br>
            <button type="submit">submit</button>
            </form>
        `);
});
app.post('/submit',(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    res.send('Name:'+name+'<br>Email:'+email);
});
app.listen(3000,()=>{
    console.log('server running on http://localhost:3000');
});