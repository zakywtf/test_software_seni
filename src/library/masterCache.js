import fetch from 'node-fetch';

const getData=async(url)=>await fetch(url).then(resp=>resp.json()).then(json=>json).catch(error=>error);

const getArticles = async(body) => {
    const {q, f1, fq, page, facet_fields, facet_filter, facet, begin_date, end_date, sort} = body
    const url = process.env.ARTICLES_URL+`?f1=${f1}&fq=${fq}&page=${page}&q=${q}&facet_filter=${facet_filter}&facet_fields=${facet_fields}&facet=${facet}&begin_date=${begin_date}&end_date=${end_date}&sort=${sort}&api-key=${process.env.API_KEY}`
    try {
        const data = await getData(url);
        return data.response.docs
    } catch (error) {
        throw error;
    }
}

const detailArticle = async(url) => {
    const options = {
        method:'GET',
        headers:{
            'content-Type':'text/html; charset=utf-8',
            Connection: 'keep-alive'
        }
    }

    const resp = await fetch(url, options)
    const htmlResp = await resp.text()
    
    return htmlResp
}

module.exports = {
    getArticles,
    detailArticle
}