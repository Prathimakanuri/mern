const express=require('express');
const app=express();
app.use(express.json());
let students=[
    {id:1,name:'Ravi'},
    {id:2,name:'Sita'}
];
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send('students added sucessfully');
});
app.get('/students',(req,res)=>{
    res.json(students);
});
app.delete('/students/:id',(req,res)=>{
    const id=Number(req.params.id);
    students=students.filter(s=>s.id!==id);
    res.send('student deleted sucessfully');
});
app.listen(3000,()=>{
    console.log('server running on port 3000');
})