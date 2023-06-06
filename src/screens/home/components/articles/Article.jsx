import React from "react";
import './style.css'
import moment from "moment";


const Article = (props) => {

    const { title, created_utc, subreddit, num_comments, url, permalink } = props.article;

    return (
        <div className="articles">
            <a href={ "https://reddit.com" + permalink } target="blank">
                <h2>{title}</h2>
            </a>
            <img src={url} alt=" "/>

            <div className="article-props">
                <span className="author">{subreddit}</span>
                <p>{moment.unix(created_utc).fromNow()}</p>
                <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" class="icon-action" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"></path></svg>{num_comments}</span>
            </div>
        </div>
    )
}

export default Article;

