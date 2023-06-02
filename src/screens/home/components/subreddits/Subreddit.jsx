import React from "react";
import './style.css'

const Subreddit = (props) => {

    const {title, icon_img} = props.subreddit

    const handleOnClick = () => props.onClick(title.toLowerCase().replace(' ','_'));
    return (
        <div className="subreddits" onClick={handleOnClick}>
            <div className="subreddit-container">
            <img src={icon_img}/>
            <h3>{title}</h3>
            </div>
        </div>  
    )
}

export default Subreddit;
