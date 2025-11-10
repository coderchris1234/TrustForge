import { BusinessPost } from "../Config/Data";
import { Newsfeed_container } from "./BusinessNewsFeedStyle";
import { CiHeart } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setbusinessOwnerId } from "../Pages/Global/Slice";
// import axios from "axios";
const BusinessNewsFeed = ({ data }) => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const dispatch = useDispatch();
  console.log("data", data);
  const nav = useNavigate();
  // console.log(data);
  return (
    //  const saveBusiness = async (businessId) => {
    //   const res = await axios.post(`${BaseUrl}/save`,
    //      { businessId },

    //   )
    //  }

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
                  <span>{post.viewCount}</span>
                </div>
                <div className="like">
                  <div>
                    {/* <CiHeart size={40} onClick={() => saveBusiness(post.id)} /> */}
                  </div>
                  <span>{post.likeCount}</span>
                </div>
                <div className="like">
                  <div>
                    <LuMessageSquare />
                  </div>
                  <span>{post.likeCount}</span>
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
            <div
              onClick={() => {
                nav(`business/${post.businessName}/${post.id}`),
                  dispatch(setbusinessOwnerId(post?.businessOwner));
              }}
              className="post_view"
            >
              View details
            </div>
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
