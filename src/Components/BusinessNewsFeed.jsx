import { Newsfeed_container } from "./BusinessNewsFeedStyle";
import { CiHeart } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSavedBusiness, setbusinessOwnerId } from "../Pages/Global/Slice";
import toast from "react-hot-toast";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { AiOutlineUpload } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
// import { useEffect } from "react";

const BusinessNewsFeed = ({ data }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.TrustForge.user?.token);
  // const userId = useSelector((state) => state.TrustForge.user?.data?.id);
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

  const BaseUrl = import.meta.env.VITE_BaseUrl;
  const isLoading = !data || data.length === 0;

  const handleView = async (businessId) => {
    try {
      const res = await axios.post(
        `${BaseUrl}/view`,
        { businessId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res);

      return true;
    } catch (err) {
      console.error(err);

      const msg =
        err?.response?.data?.message ||
        "You need an active subscription to view this business.";

      toast.error(msg);

      return false;
    }
  };

  return (
    <Newsfeed_container>
      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="postCard">
              <div className="busines_left">
                <div className="supplychain">
                  <div className="icon">
                    <Skeleton circle width={30} height={30} />
                    <h3>
                      <Skeleton width={120} />
                    </h3>
                  </div>
                  <div className="trendsection">
                    <Skeleton width={100} />
                  </div>
                </div>

                <div className="details">
                  <div className="ai">
                    <Skeleton width={80} />
                  </div>
                  <div className="series">
                    <Skeleton width={80} />
                  </div>
                  <div className="founded">
                    <Skeleton width={100} />
                  </div>
                </div>

                <div className="about">
                  <small>
                    <Skeleton count={2} />
                  </small>
                </div>

                <div className="engagement">
                  <div className="reactions">
                    <div className="viewnum">
                      <IoEyeOutline />
                      <span>
                        <Skeleton width={30} />
                      </span>
                    </div>
                    <div className="like">
                      <CiHeart size={20} />
                      <span>
                        <Skeleton width={30} />
                      </span>
                    </div>
                    <div className="like">
                      <AiOutlineUpload />
                      <span>
                        <Skeleton width={30} />
                      </span>
                    </div>
                    <div className="comment">
                      <div>
                        <Skeleton width={60} />
                      </div>
                      <div>
                        <Skeleton width={30} />
                      </div>
                    </div>
                  </div>
                  <div className="seeking">
                    <Skeleton width={120} />
                  </div>
                </div>
              </div>

              <div className="busines_right">
                <div className="post_view">
                  <Skeleton width={100} />
                </div>
                <div className="love">
                  <Skeleton circle width={40} height={40} />
                </div>
              </div>
            </div>
          ))
        : data.map((post) => {
            const isSaved = savedList.some((item) => item.id === post.id);
            return (
              <div key={post.id} className="postCard">
                <div className="busines_left">
                  <div className="supplychain">
                    <div className="icon">
                      {post.icon1}
                      <BsBuildings size={24} />
                      <h3>{post.businessName}</h3>
                    </div>
                    {/* <div className="trendsection">
                      {post.trendicon}
                      {post.trend}
                    </div> */}
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
                        <CiSaveDown2 />
                        <span>{post.SaveCount}</span>
                      </div>

                      <div className="comment">
                        <div>{post.comment}</div>
                        <div>{post.commentNum}</div>
                      </div>
                    </div>

                    <div className="seeking">
                      seeking: &#8358;
                      {post?.fundingSought
                        ? Number(post.fundingSought).toLocaleString()
                        : 0}
                    </div>
                  </div>
                </div>

                <div className="busines_right">
                  <div
                    onClick={async () => {
                      const allowed = await handleView(post.id);

                      if (!allowed) return; 

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
                    <CiSaveDown2
                      size={30}
                      color={isSaved ? "green" : "black"}
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
