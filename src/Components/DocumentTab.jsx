import React from "react"; 
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";

const breakpoints = {
  mobile: "480px",
  mobileLarge: "768px",
  tablet: "1024px",
};

export const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    gap: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const DocumentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f4f4f4;
  padding: 14px;
  border-radius: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 12px;
  }

  @media (max-width: ${breakpoints.mobileLarge}) {
    padding: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
  }
`;

export const DocumentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  strong {
    font-size: 14px;
    color: blue;
    word-break: break-word;
  }

  span {
    font-size: 13px;
    color: #333;
    flex: 1 1 auto;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* Tablet: reduce spacing slightly */
  @media (max-width: ${breakpoints.tablet}) {
    gap: 6px;
    strong {
      font-size: 13.5px;
    }
    span {
      font-size: 13px;
    }
  }

  /* Mobile-Large (≤768px): stack items neatly */
  @media (max-width: ${breakpoints.mobileLarge}) {
    flex-direction: column; /* stack everything vertically */
    align-items: flex-start;
    gap: 8px;

    strong {
      font-size: 13px;
    }

    span {
      font-size: 12.5px;
      width: 100%;
    }

    a {
      align-self: flex-start; 
    }
  }

  /* Mobile (≤480px): compact and readable */
  @media (max-width: ${breakpoints.mobile}) {
    strong {
      font-size: 12px;
    }

    span {
      font-size: 12px;
    }

    a svg {
      width: 18px;
      height: 18px;
    }
  }
`;


const DocumentTab = ({ data }) => (
  <DocumentList>
    <DocumentItem>
      <DocumentInfo>
        <strong>{data?.pitchDeck?.split("/").pop()}</strong>
        <span>Pitch Deck</span>
        <a
          href={data?.pitchDeck}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload style={{ cursor: "pointer" }} />
        </a>
      </DocumentInfo>

      <DocumentInfo>
        <strong>{data?.businessRegisterationCertificate?.split("/").pop()}</strong>
        <span>Business Registration Certificate</span>
        <a
          href={data?.businessRegisterationCertificate}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiDownload style={{ cursor: "pointer" }} />
        </a>
      </DocumentInfo>
    </DocumentItem>
  </DocumentList>
);

export default DocumentTab;
