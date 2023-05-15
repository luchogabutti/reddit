import React from "react";


const Article = (props) => {
    return (
        <div>
            <a href={ "https://reddit.com" + props.article.permalink } target="blank">
                <h3>{props.article.title}</h3>
            </a>
            <p>Subreddit: {props.article.subreddit}</p>
            <p>Autor: {props.article.author}</p>
        </div>
    )
}

export default Article;

