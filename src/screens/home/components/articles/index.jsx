import React, { useEffect, useState } from "react";
import Article from "./Article";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
    fetch(`https://www.reddit.com/.json`).then(res=>{
        if (res.status !=200) {
        console.log('Error');
        return;
        }

        res.json().then(data => {
        if (data != null) {
            setArticles(data.data.children);
            }
        })

    });

    }, []);

    return (
        <div className="articles-container" color="secondary">
            {articles && articles.map(article => <Article key={article.id} article={article.data} />)}
        </div>
    )
}

export default Articles;
