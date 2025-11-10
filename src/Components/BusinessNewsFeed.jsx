import { Newsfeed_container } from "./BusinessNewsFeedStyle";
import { CiHeart } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSavedBusiness, setbusinessOwnerId } from "../Pages/Global/Slice";
import toast from "react-hot-toast";
import axios from "axios";

const BusinessNewsFeed = ({ data }) => {
  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.TrustForge.user?.token);
  const savedList = useSelector(
    (state) => state.TrustForge.savedBusinesses || []
  );
  const nav = useNavigate();

  const handleSave = async (business) => {
    const isSaved = savedList.some((item) => item.id === business.id);

    try {
      await axios.post(
        `${BaseUrl}/save`,
        { businessId: business.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(toggleSavedBusiness(business));

      toast.success(isSaved ? "Business unsaved" : "Saved successfully");
    } catch (err) {
      console.error(err);
      toast.error("Could not save business");
    }
  };

  return (
    <Newsfeed_container>
      {data?.map((post) => {
        const isSaved = savedList.some((item) => item.id === post.id);

        return (
          <div key={post.id} className="postCard">
            <div className="busines_left">
              <div className="supplychain">
                <div className="icon">
                  {post.icon1}
                  <h3>{post.businessName}</h3>
                </div>
                <div className="trendsection">
                  {post.trendicon}
                  {post.trend}
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
                    <IoEyeOutline />
                    <span>{post.viewCount}</span>
                  </div>

                  <div className="like">
                    <CiHeart size={20} />
                    <span>{post.likeCount}</span>
                  </div>

                  <div className="like">
                    <LuMessageSquare />
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
                  nav(
                    `/dashboard/investor/business/${post.businessName}/${post.id}`
                  );
                  dispatch(setbusinessOwnerId(post.businessOwner));
                }}
                className="post_view"
              >
                View details
              </div>

              <div className="love">
                <CiHeart
                  size={40}
                  color={isSaved ? "red" : "black"}
                  onClick={() => handleSave(post)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </Newsfeed_container>
  );
};

export default BusinessNewsFeed;
