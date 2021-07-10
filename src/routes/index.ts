import  {Router}  from "express";
import * as  pagesController from '../controllers/pagesController'
import * as searchController  from '../controllers/searchController'

const router=Router()


router.get("/", pagesController.Home)
router.get("/dogs", pagesController.Dogs)

router.get("/cats",pagesController.Cats)

router.get("/fishes",pagesController.Fishes)

router.get('/search',searchController.Search)


export default router;