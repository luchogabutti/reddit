import React from "react";
import './style.css'
import moment from "moment";


const Article = (props) => {

    const title = props.article.title
    const date = props.article.created_utc
    const author = props.article.author
    const num_comments = props.article.num_comments
    const image = props.article.url

    return (
        <div className="articles">
            <a href={ "https://reddit.com" + props.article.permalink } target="blank">
                <h2>{title}</h2>
            </a>
            <img src={image} alt=" "/>

            <div className="article-props">
                <span className="author">{author}</span>
                <p>{moment.unix(date).fromNow()}</p>
                <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="icon-action" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path></svg>{num_comments}</span>
            </div>
        </div>
    )
}

export default Article;

