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
    "How do I upload my business profile?":
      "Navigate to the Add Business section from the sidebar. Fill in all required information including business name, industry, description, business model, and funding details. You can also attach supporting documents like pitch decks and business plans.",
    "How can investors contact me?":
      "Investors can send you messages through our secure messaging system. You will receive notifications when you have new messages. You can respond directly through the Messages section.",
    "What is the NDA process?":
      "When an investor wants to access detailed information about your business, they will be required to sign a Non-Disclosure Agreement (NDA). You will be notified when an NDA is signed, and all confidential information is protected under this legal agreement.",
    "How do I track my business performance?":
      "Visit the Analytics Dashboard to see detailed metrics including views, likes, messages, and investor interest. You can track engagement over time and see which businesses are performing best.",
    "Can I edit or delete my business profile after uploading?":
      "Yes, you can edit or delete your business profiles at any time from the 'My Businesses' section. Click on a business to view its details, then use the Edit or Delete buttons. Note that deleting a business profile is permanent and cannot be undone.",
    "What happens after an investor shows interest?":
      "When an investor expresses interest, you will receive a notification. You can then communicate through our messaging system, share additional documents, and schedule meetings to discuss your business further.",
    "How do I complete KYC verification?":
      "Navigate to the KYC Verification section and fill in all required information. Upload the requested documents such as ID proof and address proof. Our team will review and verify your information within 24-48 hours.",
    "Is my data secure?":
      "Yes, we take security very seriously. All data is encrypted in transit and at rest. We comply with industry-standard security practices and never share your information with third parties without your consent.",
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
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <QuestionRow>
              <span>{question}</span>
              <Arrow open={expandedIndex === index}>
                <RiArrowDropDownLine
                  style={{
                    fontSize: "25px",
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
          <label>Subject</label>
          <input
            type="text"
            name="title"
            value={ticket.title}
            onChange={handleTicketChange}
            placeholder="Brief discussion of your issue"
          />
          <label>Message</label>
          <textarea
            name="description"
            value={ticket.description}
            onChange={handleTicketChange}
            placeholder="Describe your issue in detail"
          />
          <label>Attachment (optional)</label>
          <input type="file" name="file" onChange={handleTicketChange} />
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Ticket"}
          </button>
          {feedback && (
            <p
              style={{
                marginTop: "1rem",
                color: "#f31111ff",
                fontSize: "18px",
              }}
            >
              {feedback}
            </p>
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

const Wrapper = styled.div`
  padding: 2rem;
  width: 90%;
  /* max-width: 800px; */
  margin: auto;
  font-family: Poppins, sans-serif;
  /* background-color: #f9f9f9; */

  h3 {
    font-size: 22px;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

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
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  cursor: pointer;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #1b1b1b;
  font-size: 16px;
`;

const Arrow = styled.span`
  font-size: 18px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Answer = styled.div`
  margin-top: 0.5rem;
  padding-left: 1rem;
  color: #333;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    background-color: #fafafa;
  }

  button {
    background-color: #00a3ff;
    color: white;
    border: none;
    padding: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background-color: #007acc;
    }
  }
`;

const Contact = styled.div`
  p {
    font-size: 14px;
    margin: 0.5rem 0;
    color: #333;
  }
`;

export default HelpSupport;
