const express=require('express')
const path=require('path')  //get directory path
const app=express()


const cors = require('cors') //install cors- npm install cors
app.use(cors());
app.use(express.json())

const PORT = 3000;
const MongoClient = require('mongodb').MongoClient
const { ObjectId } = require('mongodb')
// const pug = require('pug')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const url = 'mongodb://localhost:27017/blog'
const dbName = 'blog';
let db


//connect to mongodb
MongoClient.connect(url,
    { useNewUrlParser:true,
        useUnifiedTopology:true})
        .then(async client =>{
            console.log('Connected to Mongodb')
            db=client.db(dbName)
            console.log(db+'lllllllllllllllllllllllllllll')
            //create operation
            app.post('/createblog', async(req,res)=>{
                try{
                    
                    const user =req.body;
                    const result = await db.collection('blogdata').insertOne(user)
                    res.send({message: 'user created successsfully'})
                } catch(err){
                    res.status(500).send({message:'Error creating user'})
                }
            });

            //read operation
            app.get('/showdata',async(req,res) =>{
                try{
                   const user= await db.collection('blogdata').find().toArray();
                   res.send(user);
                }catch(err){
                   res.status(500).send({message:'error fething users'})
                }
             })

             //read operation by id
             app.get('/readblog/:id', async (req,res)=>{
                try{
                    const product=await db.collection('blogdata').findOne({_id:new ObjectId(req.params.id)})
                   res.json(product);
                }catch (err){
                    res.status(404).send({message: err.message});
                
                return
            }
        });
                        

             //delete operation
             app.get('/users/:id', async (req,res)=>{
                try{
                    const id=req.params.id
                    if(!ObjectId.isValid(id)){
                        res.status(400).send({message:'Invalid object id'})
                        return
                    }
                    const result=await db.collection('user').deleteOne({_id:new ObjectId(id)})
                    res.send({message:'User deleted successfully'})
                } catch (err){
                    res.status(500).send({message:'Error deleting user'})
                }
             })
             
       


app.listen(PORT,()=>{
    console.log(`Server running on http://localhost: ${PORT}`);
})
})
.catch(err=>{
    console.log(err)
})