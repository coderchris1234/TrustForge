import { BusinessPost } from "../Config/Data";
import { Newsfeed_container } from "./BusinessNewsFeedStyle";    
const BusinessNewsFeed = () => {
  return (
   <Newsfeed_container>
    {BusinessPost.map((post, index) => (
        <div key={index} className="postCard">
            <div className="supplychain">
                <div className="icon">{post.icon1}</div>
                <div className="title_trending">
                    <h3>{post.title}</h3>   
                </div>
            </div>
            <div className="trendsection">
                <div className="trendingIcon">{post.trendicon}<span>{post.trend}</span></div>
            </div>
            <div className="details">
                <p>{post.ai}</p>
                <p>{post.series}</p>
                <p>{post.founded}</p>
            </div>
            <div className="about">
                <p>{post.about}</p>
            </div>
            <div className="engagement">
                <p>{post.view}<span>{post.viewNum}</span></p>
                <p>{post.like}<span>{post.likeNum}</span></p>
                <p>{post.comment}<span>{post.commentNum}</span></p>
            </div>
        </div>
    ))}
    </Newsfeed_container>
  )
}

export default BusinessNewsFeed
