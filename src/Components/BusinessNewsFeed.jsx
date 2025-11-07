import { BusinessPost } from "../Config/Data";
import { Newsfeed_container } from "./BusinessNewsFeedStyle";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
const BusinessNewsFeed = ({ data }) => {
  console.log(data);
  return (
    <Newsfeed_container>
      {data?.map((post, index) => (
        <div key={index} className="postCard">
          <div className="busines_left">
            <div className="supplychain">
              <div className="icon">
                {post.icon1}
                <h3>{post.businessName}</h3>
              </div>
              <div className="trendsection">
                <>{post.trendicon}</>
                <>{post.trend}</>
              </div>
            </div>
            <div className="details">
              <div className="ai">{post.industry}</div>
              <div className="series">{post.fundingStage}</div>
              <div className="founded">Founded {post.yearFounded}</div>
            </div>
            <div className="about">
              <small>{post.description}</small>
            </div>
            <div className="engagement">
              <div className="reactions">
                <div className="viewnum">
                  <div>
                    <IoEyeOutline />
                  </div>
                  <div>{post.viewCount}</div>
                </div>
                <div className="like">
                  <div>
                    <CiHeart />
                  </div>
                  <div>{post.likeCount}</div>
                </div>
                <div className="comment">
                  <div>{post.comment}</div>
                  <div>{post.commentNum}</div>
                </div>
              </div>
              <div className="seeking">seeking: ${post.fundingSought}</div>
            </div>
          </div>
          <div className="busines_right">
            <div className="post_view">View details</div>
            <div className="love">
              <CiHeart size={40} />
            </div>
          </div>
        </div>
      ))}
    </Newsfeed_container>
  );
};

export default BusinessNewsFeed;
