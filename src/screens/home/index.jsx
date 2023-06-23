import React, {useState} from "react";
import Header from "./components/header/Header";
import Articles from "./components/articles";
import './style.css'
import Subreddits from "./components/subreddits";


const Home = () => {

    const [subreddit, setSubreddit] = useState('home');

    return  (
        <>  
            <Header />
            <div className="main">
                <Articles subreddit={subreddit}/>
                <Subreddits onChangeSubreddit={setSubreddit}/>
            </div>
        </>
    )
}

export default Home;
