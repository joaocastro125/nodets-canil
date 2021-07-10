import {Request,Response} from 'express'

export const Home=(req:Request,res:Response)=>{
   res.render('pages/page')
}
export const Dogs=(req:Request,res:Response)=>{
    res.render('pages/page')
}
export const Cats=(req:Request,res:Response)=>{
    res.send('CAT')
}
export const Fishes=(req:Request,res:Response)=>{
    res.send('FISH')
}