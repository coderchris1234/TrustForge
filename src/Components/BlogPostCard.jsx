import React from "react";
import { BlogPostCardStyle } from "./BlogPostCardStyle";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBlogIndex } from "../Pages/Global/Slice";

const BlogPostCard = (props) => {
  const dispatch = useDispatch();
  return (
    <BlogPostCardStyle>
      <div className="Insight_Card_image">
        <img src={props?.item?.image} alt="" />
      </div>
      <div className="Insight_card_contents">
        <article className="Insight_card_text_holder">
          <span>{props.item.title}</span>
          <h3>{props.item.heading}</h3>
          <div className="Read_me_blog">
            <p>
              {props.item.descriptions}{" "}
              <NavLink
                to={`/blog-details/${props.item.heading}`}
                className="Read_More"
                onClick={() => dispatch(setBlogIndex(2))}
              >
                Read More
              </NavLink>
            </p>
          </div>
        </article>
        <aside className="Insight_card_footer">
          <div className="Profile_insight">
            <span>{props.item?.profileIcon} </span>
            <p>{props.item.profileName}</p>
          </div>
          <div className="Profile_insight1">
            <div className="Profile_icon_holder">
              <span>{props.item?.dateIcon}</span>
              <p>{props.item.dateName}</p>
            </div>
            <div className="Profile_icon_holder">
              <span>{props.item?.timeIcon}</span>
              <p>{props.item.timeName}</p>
            </div>
          </div>
        </aside>
      </div>
    </BlogPostCardStyle>
  );
};

export default BlogPostCard;
