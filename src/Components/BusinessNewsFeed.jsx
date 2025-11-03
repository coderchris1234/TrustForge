import { BusinessPost } from "../Config/Data";
import { Newsfeed_container } from "./BusinessNewsFeedStyle";
const BusinessNewsFeed = () => {
  return (
    <Newsfeed_container>
      {BusinessPost.map((post, index) => (
        <div key={index} className="postCard">
          <div className="busines_left">
            <div className="supplychain">
              <div className="icon">
                {post.icon1}
                <h3>{post.title}</h3>
              </div>
              <div className="trendsection">
                <>{post.trendicon}</>
                <>{post.trend}</>
              </div>
            </div>
            <div className="details">
              <div className="ai">{post.ai}</div>
              <div className="series">{post.series}</div>
              <div className="founded">{post.founded}</div>
            </div>
            <div className="about">
              <small>{post.about}</small>
            </div>
            <div className="engagement">
              <div className="reactions">
                <div className="viewnum">
                  <div>{post.views}</div>
                  <div>{post.viewNum}</div>
                </div>
                <div className="like">
                  <div>{post.like}</div>
                  <div>{post.likeNum}</div>
                </div>
                <div className="comment">
                  <div>{post.comment}</div>
                  <div>{post.commentNum}</div>
                </div>
              </div>
              <div className="seeking">{post.seeking}</div>
            </div>
          </div>
          <div className="busines_right">
            <div className="post_view">{post.view}</div>
            <div className="love">{post.love}</div>
          </div>
        </div>
      ))}
    </Newsfeed_container>
  );
};

export default BusinessNewsFeed;
