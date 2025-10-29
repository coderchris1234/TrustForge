import React from "react";
import { FooterContainer } from "./FooterStyle";
import { MdCopyright } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import LOGO2 from "../assets/LOGO2.png";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="Footer_wrapper">
        <aside className="Footer_info">
          <div className="Footer_text_logo">
            <div className="Footer_logo">
              <div className="Logo_img_footer">
                <img src={LOGO2} />
              </div>
            </div>
            <p>
              Bridging the gap between
              <br /> startups / existing businesses and <br />
              investors with transparency and <br /> confidence
            </p>
          </div>
          <article className="Footer_text1">
            <div className="Footer_text">
              <div className="Footer_text_header">
                <h3>Quick links</h3>
              </div>
              <div className="Footer_text_footer">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="Footer_text">
              <div className="Footer_text_header">
                <h3>Legal</h3>
              </div>
              <div className="Footer_text_footer">
                <ul>
                  <li>Terms and conditions</li>
                  <li>Privacy and policy</li>
                  <li>Terms of use</li>
                </ul>
              </div>
            </div>
          </article>
          <div className="Footer_text2">
            <div className="Footer_text_header">
              <h3>Get in touch</h3>
            </div>
            <div className="Footer_text_footer">
              <p>+234 906 049 6537,+234 901 763 4832</p>
              <p>support.trustforge@gmail.com</p>
            </div>
          </div>
        </aside>
        <div className="Footer_links">
          <div className="Footer_link_media">
            <div className="Footer_link_text">
              <MdCopyright className="link_icons" />
              <p>Copyrights 2025 TRUSTFORGE. All rights reserved</p>
            </div>
            <div className="Footer_link_icon">
              <SlSocialLinkedin className="Media_icon_link" />
              <FaInstagram className="Media_icon_link" />
              <RiFacebookCircleLine className="Media_icon_link" />
              <FaWhatsapp className="Media_icon_link" />
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
