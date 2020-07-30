import { Router } from 'express'
import { getArticles, detailArticle } from '../library/masterCache';
import handleRequest from '../library/ctrlHandler';

const createRouter=()=>{
    const router = Router();

    router.get('/articles', async(req,res)=>{
        handleRequest(req,res,async(body)=>{
            return await getArticles(body);
        })
    })

    router.get('/articles/detail', async(req,res)=>{
        handleRequest(req,res,async(body)=>{
            return await detailArticle(body.web_url);
        })
    })

    return router;
}

module.exports=createRouter();
