import express from 'express'
import mustache from 'mustache-express';
import path from 'path';
import dotenv from 'dotenv'
import {Request,Response} from 'express'
import indexMain from './routes'

dotenv.config()
const app=express()

app.set('view engine', 'mustache')
app.set('views',path.join(__dirname,'views'))
app.engine('mustache', mustache());
app.use(express.static(path.join(__dirname,'../public')))
app.use(indexMain) 

app.use((req:Request,res:Response)=>{
    res.render('pages/404')

})

app.listen(process.env.PORT ||4000,()=>console.log('running server'))