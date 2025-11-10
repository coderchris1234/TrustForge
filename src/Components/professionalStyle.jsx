// professionalStyle.js
import styled from "styled-components";

export const Professional_container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(2,6,23,0.04);
  border: 1px solid rgba(15,23,42,0.03);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;

  .comapny_header_kyc {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .comapny_header_kyc h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
  }

  .kyc {
    background: #dcfce7;
    color: #166534;
    padding: 6px 10px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 12px;
  }

  .details_row {
    display: flex;
    gap: 32px;
    margin-top: 6px;
    align-items: flex-start;
  }

  .left_col,
  .right_col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .field p {
    margin: 0;
    font-size: 13px;
    color: #6b7280;
  }

  .field span {
    margin-top: 6px;
    display: block;
    font-size: 15px;
    color: #111827;
    font-weight: 700;
  }

  .business_description {
    margin-top: 6px;
  }

  .business_description h3 {
    margin: 0 0 6px 0;
    font-size: 14px;
    color: #6b7280;
  }

  .business_description span {
    color: #111827;
    font-size: 15px;
    font-weight: 600;
  }

  .update_information {
    margin-top: 12px;
    background: #f3f4f6;
    padding: 12px;
    border-radius: 8px;
    color: #6b7280;
    font-size: 13px;
  }

  /* Mobile adjustments */
  @media (max-width: 420px) {
    padding: 12px;

    .comapny_header_kyc h2 {
      font-size: 16px;
    }

    .kyc {
      font-size: 12px;
      padding: 5px 8px;
    }

    .details_row {
      flex-direction: column;
      gap: 10px;
    }

    .field p {
      font-size: 12px;
    }

    .field span {
      font-size: 15px;
    }

    .business_description h3 {
      font-size: 13px;
    }

    .business_description span {
      font-size: 14px;
    }

    .update_information {
      font-size: 12px;
      padding: 10px;
    }
  }
`;
