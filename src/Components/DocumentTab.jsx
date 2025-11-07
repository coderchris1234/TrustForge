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

const DocumentTab = () => (
  <DocumentList>
    {["Business Plan", "Financial Projections", "Pitch deck"].map((doc) => (
      <DocumentItem key={doc}>
        <DocumentInfo>
          <strong>{doc}</strong>
          <span>PDF, 2.5MB</span>
        </DocumentInfo>
        <FiDownload size={20} />
      </DocumentItem>
    ))}
  </DocumentList>
);

export default DocumentTab;
