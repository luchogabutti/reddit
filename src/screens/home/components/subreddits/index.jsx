import React, { useEffect, useState } from "react";
import Subreddit from "./Subreddit";

const Subreddits = ({onChangeSubreddit}) => {

    const [subreddits, setSubreddit] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/subreddits.json").then(
          res => {
            if (res.status !== 200) {
              console.log("Warning: Something is wrong with the api.");
              return;
            }
            res.json().then(data => {
              if (data != null)
                setSubreddit(data.data.children);
            });
          }
        )
      }, []);

    return (
        <div className="subreddits-main">
            <h2>Subreddits</h2>
            {subreddits && subreddits.map(({id, data}) => <Subreddit key={id} subreddit={data} onClick={onChangeSubreddit}/>)}
        </div>
    )
}

export default Subreddits
