import React from "react";
import Header from "./components/Header";
import Articles from "./components/articles";
import Subreddit from "./components/subreddits/Subreddit";
import './style.css'


const Home = () => {

    return  (
        <>
            <Header/>
            <div className="main">
            <Articles/>
            <Subreddit/>
            </div>
        </>
    )
}

export default Home;
