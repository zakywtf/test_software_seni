import { Router } from 'express'
import { getArticles, detailArticle, getBooks } from '../library/masterCache';
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

    router.get('/books', async(req,res)=>{
        handleRequest(req,res,async(body)=>{
            return await getBooks(body);
        })
    })

    return router;
}

module.exports=createRouter();
