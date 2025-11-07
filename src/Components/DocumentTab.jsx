import React from "react";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";

const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DocumentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  padding: 10px 14px;
  border-radius: 8px;
`;

const DocumentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocumentTab = ({ data }) => (
  <DocumentList>
    <DocumentItem>
      <DocumentInfo>
        <strong>{data?.pitchDeck?.split("/").pop()}</strong>
        <span>PDF, 2.5MB</span>
      </DocumentInfo>
      <a
        href={data?.pitchDeck}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiDownload size={20} style={{ cursor: "pointer" }} />
      </a>
    </DocumentItem>
  </DocumentList>
);

export default DocumentTab;
