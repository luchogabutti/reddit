import React, { useEffect, useState } from "react";
import Article from "./Article";

const Articles = ({subreddit}) => {

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
    fetch(`https://www.reddit.com/r/${encodeURI(subreddit)}/new.json`).then(res=>{
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

    }, [subreddit]);

    return (
        <div className="articles-container">
            {articles && articles.map(article => <Article key={article.id} article={article.data} />)}
        </div>
    )
}

export default Articles;
