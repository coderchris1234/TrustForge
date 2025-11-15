import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

const HelpSupport = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    file: null,
    businessId: useSelector((state) => state.TrustForge.user?.data?.id),
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");

  const faqs = {
    "How do I find business to invest in?.":
      "Navigate to the Explore Businesses section where you can browse all available businesses. Use filters to narrow down by industry funding stage revenue, location, and more. You can save businesses you're interested in for later review.",
    "What is the investment process?.":
      "Once you find a business you're interested in, you can view its details, request an NDA to access confidential information, schedule a meeting with the business owner, and make investment offers through our platform. All transactions are tracked in your Funding History.",
    "How does NDAs work for investors?.":
      "To access detailed business information, you'll need to sign a Non-Disclosure Agreement. Once signed, you'll have access to confidential documents like financial statements, business plans, and pitch decks. All NDAs are legally binding and tracked in the NDA Management section.",
    "How can I contact business owners?.":
      "Once you express interest in a business, you can schedule meetings and discuss investment opportunities directly through the platform.",
    "How do I track my investments?.":
      "Visit the Funding History section to see all your active, pending, and completed investments. You can track investment amounts, equity stakes, returns, and view detailed reports for each investment.",
    "Can I schedule meetings with business owners?.":
      "Yes! From any business profile, you can request a meeting. The business owner will receive your request and can accept, or propose a different time. All meeting schedules are managed in the Meetings section.",
    "What are the subscription plans for?.":
      "Subscription plans give you access to premium features like advanced search filters, priority support, and increased visibility to businesses. Different tiers offer different benefits to match your investment needs.",
    "How do I complete KYC verification?.":
      "Navigate to the KYC Verification section and fill in all required information. Upload requested documents such as ID proof, address proof, and investment accreditation documents. Our team will review and verify your information within 24-48 hours. Verified investors gain access to exclusive investment opportunities.",
  };

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const BaseUrl = import.meta.env.VITE_BaseUrl;

  const handleTicketChange = (e) => {
    const { name, value, files } = e.target;
    setTicket((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmitTicket = async (e) => {
    e.preventDefault();
    setFeedback("");
    setSubmitting(true);

    if (!ticket.title || !ticket.description) {
      setFeedback("Please fill in both subject and message.");
      setSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", ticket.title);
      formData.append("description", ticket.description);
      formData.append("businessId", ticket.businessId);
      if (ticket.file) {
        formData.append("attachment", ticket.file);
      }

      const response = await axios.post(`${BaseUrl}/support`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API response:", response.data);
      setFeedback("✅ Ticket submitted successfully!");
      setTicket({
        title: "",
        description: "",
        file: null,
        businessId: ticket.businessId,
      });
    } catch (err) {
      console.error("API error:", err);
      setFeedback("❌ Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <h3>Help & Support</h3>
      <p>Get help and answers to common questions</p>

      <Section>
        <h2>❓ Frequently Asked Questions</h2>
        {Object.entries(faqs).map(([question, answer], index) => (
          <FAQItem
            key={index}
            onClick={() => toggleFAQ(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? toggleFAQ(index) : null)}
          >
            <QuestionRow>
              <QuestionText>{question}</QuestionText>
              <Arrow open={expandedIndex === index}>
                <RiArrowDropDownLine
                  style={{
                    fontSize: "26px",
                    display: "block",
                    lineHeight: 1,
                  }}
                />
              </Arrow>
            </QuestionRow>
            {expandedIndex === index && <Answer>{answer}</Answer>}
          </FAQItem>
        ))}
      </Section>

      <Section>
        <h2>Submit a Support Ticket</h2>
        <Form onSubmit={handleSubmitTicket}>
          <label htmlFor="title">Subject</label>
          <input
            id="title"
            type="text"
            name="title"
            value={ticket.title}
            onChange={handleTicketChange}
            placeholder="Brief discussion of your issue"
          />
          <label htmlFor="description">Message</label>
          <textarea
            id="description"
            name="description"
            value={ticket.description}
            onChange={handleTicketChange}
            placeholder="Describe your issue in detail"
          />
          <label htmlFor="file">Attachment (optional)</label>
          <input
            id="file"
            type="file"
            name="file"
            onChange={handleTicketChange}
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Ticket"}
          </button>
          {feedback && (
            <Feedback success={feedback.startsWith("✅")}>{feedback}</Feedback>
          )}
        </Form>
      </Section>

      <Section>
        <h2>📞 Contact Information</h2>
        <Contact>
          <p>
            <strong>Email Support:</strong> supporttrusforge@gmail.com
          </p>
          <p>
            <strong>Phone Support:</strong> +234 906 0496 537, +234 901 7634 832
          </p>
        </Contact>
      </Section>
    </Wrapper>
  );
};

const breakpoints = {
  mobile: "480px",
  mobileLarge: "720px",
  tablet: "1024px",
};

const Wrapper = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  color: #1b1b1b;

  h3 {
    font-size: 22px;
    margin: 0 0 6px 0;
  }

  p {
    margin: 0 0 18px 0;
    color: #555;
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    max-width: 960px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 1rem;
    max-width: 95%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.8rem;
    max-width: 100%;
  }
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
  background-color: #fff;
  padding: 1.6rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);

  h2 {
    font-size: 20px;
    margin-bottom: 1rem;
    color: #1b1b1b;
  }

  label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  cursor: pointer;
  width: 100%;
  touch-action: manipulation;
  user-select: none;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.9rem 0;
  }
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
  font-weight: 600;
  color: #1b1b1b;
  font-size: 16px;
  line-height: 1.25;
  flex-wrap: nowrap;

  @media (max-width: ${breakpoints.mobileLarge}) {
    font-size: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const QuestionText = styled.div`
  flex: 1;
  min-width: 0;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const Arrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: transform 0.25s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const Answer = styled.div`
  margin-top: 0.6rem;
  padding-left: 0.6rem;
  color: #333;
  font-size: 14px;
  line-height: 1.45;

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding-left: 0.4rem;
    font-size: 13.5px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: 0;
    font-size: 13px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  align-items: start;
  width: 100%;

  input,
  textarea {
    padding: 0.9rem;
    border-radius: 10px;
    border: 1px solid #d0d7dd;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
    background-color: #fafafa;
    min-height: 44px;
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  /* file input - make it easier to tap */
  input[type="file"] {
    padding: 0.6rem;
    border-radius: 8px;
    background: #fff;
    border: 1px solid #e6e6e6;
  }

  button {
    background-color: #00a3ff;
    color: white;
    border: none;
    padding: 0.95rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    min-height: 48px;
    transition: background-color 140ms ease, transform 80ms ease;
    width: 220px; /* desktop width */
    justify-self: start;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  button:active {
    transform: translateY(1px);
  }

  button:hover {
    background-color: #007acc;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 0.85rem;

    button {
      width: 260px;
    }
  }

  /* Mobile: make button full width so it's easy to tap */
  @media (max-width: ${breakpoints.mobileLarge}) {
    button {
      width: 100%;
      justify-self: stretch;
    }
  }
`;

/* feedback text - green for success, red for error */
const Feedback = styled.p`
  margin-top: 1rem;
  color: ${({ success }) => (success ? "#0a8a00" : "#f31111")};
  font-size: 15px;
`;

/* Contact */
const Contact = styled.div`
  p {
    font-size: 14px;
    margin: 0.5rem 0;
    color: #333;
  }

  @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: 13px;
    }
  }
`;

export default HelpSupport;
