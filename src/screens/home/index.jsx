import React from "react";
import Header from "./components/Header";
import Articles from "./components/articles";
import './style.css'
import Subreddits from "./components/subreddits";


const Home = () => {

    return  (
        <>
            <Header/>
            <div className="main">
            <Articles/>
            <Subreddits/>
            </div>
        </>
    )
}

export default Home;
