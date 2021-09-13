import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './index.css';
function Mid(){
    return(
     <div className="you">
      <h4><YouTubeIcon/>Over 500 FREE Home Workouts</h4>
      <div className="tube">
      <img src="https://yt3.ggpht.com/a/AATXAJwUgI0p1F6EGHqqvErS2Z6ILkfWyPrTf9ZONg=s200-c-k-c0xffffffff-no-rj-mo" height="100px;" width="100px;"/>
      <div className="text"><h6>Lilly Sabri</h6><br/><p>I’m Lilly Sabri, founder of Lean with Lilly. I’ve been a Chartered...</p> 
      <a href="https://www.youtube.com/channel/UCTsM1dSAiXqiV5oZjuNw_Bg"><button>Subscribe</button></a><br/></div>
      </div>
     </div>
    );
};
export default Mid;