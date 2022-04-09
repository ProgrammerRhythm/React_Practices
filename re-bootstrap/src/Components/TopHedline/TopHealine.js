import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHealine = () => {
    const [news,setNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=af79ededa3ae4378ab7c59b4322ea73d')
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[])
    console.log(news);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Top Headlines : {news.length}</h1>
            {
                news.map(news => <News articles={news}></News>)
            }
        </div>
    );
};

export default TopHealine;