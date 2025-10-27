import React from "react";
import { ContentContainer } from "./ContentStyle";
import { InsightData } from "../../Config/Data";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Content = () => {
  const blogTitle = useSelector((state) => state.TrustForge.blogBtnAction);
  console.log("blogTitle", blogTitle);
  return (
    <ContentContainer>
      <div className="Startup_content">
        {InsightData?.map((item) =>
          item.title.includes(blogTitle) ? (
            <article className="Startup_card">
              <div className="Startup_Card_image">
                <img src={item.image} alt="" />
              </div>
              <div className="Startup_card_contents">
                <article className="Startup_card_text_holder">
                  <span>{item.title}</span>
                  <h3>{item.details}</h3>
                  <div className="Read_me_blog_startup">
                    <p>
                      {item.descriptions}
                      <NavLink to="/blog" className="Read_More">
                        Read More
                      </NavLink>
                    </p>
                  </div>
                </article>
                <aside className="Startup_card_footer">
                  <div className="Profile_startup">
                    <span>{item.profileIcon}</span>
                    <p>{item.profileName}</p>
                  </div>
                  <div className="Profile_startup1">
                    <div className="Profile_icon_startup_holder">
                      <span>{item.dateIcon}</span>
                      <p>{item.dateName}</p>
                    </div>
                    <div className="Profile_icon_startup_holder">
                      <span>{item.timeIcon}</span>
                      <p>{item.timeName}</p>
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          ) : null
        )}
      </div>
    </ContentContainer>
  );
};

export default Content;
