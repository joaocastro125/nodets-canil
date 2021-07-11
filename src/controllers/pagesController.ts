import {Request,Response} from 'express'
import '../models/pet'
import {menuObject} from '../helpers/menuObject'
import { pet } from '../models/pet'


export const Home=(req:Request,res:Response)=>{
    let list=pet.getAll();
   res.render('pages/page',{
       menu:menuObject('all'),
       banner:{
           title:'todos os animais',
           background:'allanimals.jpg'
       },
       list
   })
}
export const Dogs=(req:Request,res:Response)=>{
    let list=pet.getFromTypes('dog')
    
    res.render('pages/page',{
        menu:menuObject('dog'),
        banner:{
            title:'Cachorro',
            background:'banner_dog.jpg'
        },
        list
    })
}
export const Cats=(req:Request,res:Response)=>{
 let list=pet.getFromTypes('cat')
    res.render('pages/page',{
        menu:menuObject('cat'),
        banner:{
            title:'Gatos',
            background:'banner_cat.jpg'
        },
        list
    })
}
export const Fishes=(req:Request,res:Response)=>{
    let list=pet.getFromTypes('fish')
    res.render('pages/page',{
        menu:menuObject('fish'),

        banner:{
            title:'Peixes',
            background:'banner_fish.jpg'
        },
        list
    })
}