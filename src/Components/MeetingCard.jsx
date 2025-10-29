import React from "react";
import CustomButton from "./CustomButton";
import { IoVideocamOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { MeetingContainer } from "./MeetingCardStyle";
import { useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const MeetingCard = ({
  title,
  status,
  name,
  company,
  link,
  date,
  time,
  type,
  description,
  meetingType,
}) => {
  const fullName = "Sarah Johnson";

  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const nav = useNavigate();
  return (
    <>
      <MeetingContainer>
        <div className="MeetingWrapper">
          <div className="meetingHeader">
            <div className="busTitle">
              <p>{title}</p>
              <p className="conf">{status}</p>
              <span>{meetingType}</span>
            </div>
            <div className="btn">
              <CustomButton
                icon={<IoVideocamOutline />}
                Btntext="Join Meeting"
                className="button meeting"
              />
              <CustomButton
                icon={<FaArrowsRotate />}
                Btntext="Reschedule"
                className="button"
              />
            </div>
          </div>
          <section className="meetingDetails">
            <div className="contact">
              <div className="initials">{initials}</div>
              <div className="details">
                <p>{name}</p>
                <span>{company}</span>
                <span className="link" onClick={() => nav("")}>
                  {link}
                </span>
              </div>
            </div>
            <div className="meetingTime">
              <div className="meetingDate">
                <div>
                  <CiCalendar size={"20"} /> {date}
                </div>
                <div>
                  <IoVideocamOutline size={"20"} /> {type}
                </div>
              </div>

              <div>
                <CiClock2 /> {time}
              </div>
            </div>
            <p className="discussion">{description}</p>
          </section>
        </div>
      </MeetingContainer>
    </>
  );
};

export default MeetingCard;
