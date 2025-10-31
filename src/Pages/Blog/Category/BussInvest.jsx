import React from "react";
import { InvestContainer } from "./BussInvestStyle";
import { RiRectangleFill } from "react-icons/ri";
import { InsightData } from "../../../Config/Data";
import { useNavigate, useParams } from "react-router-dom";
import BlogPostCard from "../../../Components/BlogPostCard";
import CustomButton from "../../../Components/CustomButton";
import { GoArrowRight } from "react-icons/go";

const BussInvest = () => {
  const { blogTitle } = useParams();

  const nav = useNavigate();

  //   the CheckItem is Finding the blog heading that match witht the blog title coming from the userParams
  const checkTitle = InsightData.find((item) => {
    return item.heading === blogTitle;
  });

  //   this is filtering the item from the InsightData, any item that match with the checkTitle title from the InsightData array
  const RelatedData = InsightData.filter((itemRelated) => {
    return itemRelated.title === checkTitle.title;
  });

  //   this is use to display the Related without the click Data

  // const DisplayRelated = RelatedData.filter()

  console.log("this is the checkTitle data", checkTitle);
  console.log("this is the Related data", RelatedData);
  return (
    <InvestContainer>
      <div className="Invest_wrapper">
        <section className="Top_section">
          <aside className="left_Container">
            <div className="Blog_Header">
              <RiRectangleFill />
              <h3>Blog</h3>
            </div>
            <section className="Blog_Infos">
              <div className="Blog_Info_Data">
                <span>CATEGORY</span>
                <h4>{checkTitle.category}</h4>
              </div>
              <div className="Blog_Info_Data">
                <span>WRITTEN BY</span>
                <h4>{checkTitle.profileName}</h4>
              </div>
              <div className="Blog_Info_Data">
                <span> DATE POSTED</span>
                <h4>{checkTitle.dateName}</h4>
              </div>
              <div className="Blog_Info_Data">
                <p>{checkTitle.timeName}</p>
              </div>
            </section>
          </aside>
          <div className="Right_Container">
            <div className="Right_cont_items">
              <header>
                <h1>{checkTitle.heading}</h1>
              </header>
              <div className="Right_cont_image">
                <img src={checkTitle.image} alt="" />
              </div>
              <section className="Introduction_Section">
                <article className="Introduction_Section_Title">
                  <h3>Introduction</h3>
                  <p>{checkTitle.introduction}</p>
                  <p>{checkTitle.introduction2}</p>
                </article>
                <ul>
                  {checkTitle.descriptionDetails.map((list) => (
                    <li>
                      <h4>{list.titles}</h4>
                      <p>{list.info}</p>
                    </li>
                  ))}
                </ul>
                <section className="bottomText">
                  <ul>
                    {checkTitle.bottomText.map((list) => (
                      <li>{list}</li>
                    ))}
                  </ul>
                </section>
              </section>
              <CustomButton
                className="Insight_btn"
                Btntext="Get started"
                type="button"
                icon={<GoArrowRight className="Insight_icon" />}
                onClick={() => {
                  nav("/signup");
                }}
              />
            </div>
          </div>
        </section>
        <section className="Bottom_section">
          <header>
            <h1>Related article:</h1>
          </header>
          <div className="relatedPost">
            {RelatedData.map((relatedPost) =>
              relatedPost.heading !== checkTitle.heading ? (
                <BlogPostCard item={relatedPost} />
              ) : null
            )}
          </div>
        </section>
      </div>
    </InvestContainer>
  );
};

export default BussInvest;
