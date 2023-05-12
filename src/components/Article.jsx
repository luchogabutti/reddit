import React from "react";


function Article(props){
    return (
        <div>
            <a href={ "https://reddit.com" + props.article.permalink } target="blank">
                <h3>{props.article.title}</h3>
            </a>
            <p>{props.article.subreddit }</p>
        </div>
    )
}

export default Article;

