import {Request,Response} from 'express'
import {pet} from '../models/pet'
import { menuObject } from '../helpers/menuObject'

export const Search=(req:Request,res:Response)=>{
    let query:string=req.query.q as string;
    if(!query){
        res.redirect("/")
        return
    }
    let list=pet.getFromName(query)
    res.render('pages/page',{
        menu:menuObject(''),
        list,
        query
    })
    
}
