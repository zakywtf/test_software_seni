import { Router } from 'express'
import { getArticles } from '../library/masterCache';
import handleRequest from '../library/ctrlHandler';

const createRouter=()=>{
    const router = Router();

    router.get('/articles', async(req,res)=>{
        handleRequest(req,res,async(body)=>{
            return await getArticles(body);
        })
    })

    return router;
}

module.exports=createRouter();
