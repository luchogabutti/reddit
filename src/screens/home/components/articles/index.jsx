import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"
import Article from "./Article";

const Articles = ({subreddit}) => {

    const [articles, setArticles] = useState([]);
    useEffect(()=> {
    console.log(fetch(`https://www.reddit.com/r/${encodeURI(subreddit)}/new.json?limit=3`).then(res=>{
        if (res.status !=200) {
        console.log('Error');
        return;
        }

        res.json().then(data => {
        if (data != null) {
            setArticles(data.data.children);
            }
        })

    }));

    }, [subreddit])

    const fetchData = () => {
        if (articles.after == null) {
            setArticles(articles.length = articles.lengh + 3)
        }
    }

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
            <div className="articles-container">
                {articles && articles.map(article => <Article key={article.id} article={article.data} />)}
            </div>
        </InfiniteScroll>
    )
}

export default Articles;
