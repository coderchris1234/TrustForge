import React from "react";
import { Support_container } from "./HelpSupportStyle";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsTelephone } from "react-icons/bs";
const HelpSupport2 = () => {
  return (
    <Support_container>
      <div className="support_text">
        <h1>Help & Support</h1>
        <p>Get help and answers to common questions</p>
      </div>
      <div className="support_ticket_wrapper">
        <h3>Submit a Support Ticket</h3>
        <div className="input_form">
          <div className="brief_discussion">
            <p>Subject</p>
            <div className="brief_input">
              <input type="text" placeholder="Brief discussion of your issue" />
            </div>
          </div>
          <div className="describe_message">
            <p>Message</p>
            <div className="message_input">
              <input type="text" placeholder="Describe your issue in detail" />
            </div>
          </div>

          <div className="attachment_option">
            <p>Attachment (optional)</p>
            <div className="attachment_input">
              <input type="text" placeholder="Choose file: No file chosen" />
            </div>
          </div>
          <button>Submit Ticket</button>
        </div>
      </div>
      <div className="contact">
        <h3>Contact Information</h3>
        <div className="email">
          <div className="msg_icon">
            <HiOutlineEnvelope />
          </div>
          <div className="email_holder">
            <small>Email Support</small>
            <h5>Supporttrusforge@gmail.com</h5>
          </div>
        </div>
        <div className="phone">
          <div className="telephone_icon">
            <HiOutlineEnvelope />
          </div>
          <div className="phone_holder">
            <small>Phone Support</small>
            <h5>+234 906 0496 537 +234 901 7634 832</h5>
          </div>
        </div>
      </div>
    </Support_container>
  );
};

export default HelpSupport2;
