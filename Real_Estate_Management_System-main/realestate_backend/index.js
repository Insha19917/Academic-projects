const  express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const userSchema = new mongoose.Schema({            //Creating model in database
    name:String,
    email:String,
    password:String
    });

const User = new mongoose.model('User', userSchema)

DB = 'mongodb+srv://Mrunmayi:admin123@cluster0.5dr55.mongodb.net/realestate?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser : true,                                 //Connecting Database to Backend
    useUnifiedTopology : true
}).then(()=>{
    console.log('Database connected');
}).catch((err) =>{
    console.log(err);
});

app.get('/login',(req,res)=>{
    res.send('Welcome Programmers to login');
});

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:'Login successfully',user:user})
            }else{
                res.send({message:'Incorrect password'})
            }

        }else{
            res.send({message:"User not found"})
        }
    });
});

app.get('/register',(req,res)=>{
    res.send('Welcome Programmers to register');
});

app.post('/register',(req,res)=>{
    console.log(req.body)
    const {name,email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:'User already registered'})             //Inserting value to database from frontend
        }else{
            const user = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            user.save(err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:'Sucessfully registered'})
                }
            })

        }
    })
    
})

app.listen(5002,() => {
    console.log("Server is running at port 5002")
});