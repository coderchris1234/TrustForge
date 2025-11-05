// styles.js
import styled, { css } from "styled-components";

/* Page wrapper */
export const Page = styled.div`
  max-width: 980px;
  padding: 20px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  /* background-color: red; */
  height: 100%;
`;

/* Toggle buttons row */
export const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
  gap: 10px;
  /* background-color: blue; */
`;

/* Toggle button (pill) */
export const ToggleButton = styled.button`
  border: 1px solid #d1d5db;
  padding: 6px 20px;
  border-radius: 999px;
  background: #f3f4f6;
  color: #374151;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  transition: all 150ms ease;

  ${(props) =>
    props.active &&
    css`
      background: #fff;
      border-color: #9ca3ff;
      color: #111827;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.12);
    `}
`;

/* Cards row */
export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

/* Individual card */
export const Card = styled.div`
  border-radius: 12px;
  background: #fff;
  padding: 18px;
  min-height: 460px;
  border: 2px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: yellow; */

  ${(p) =>
    p.featured &&
    css`
      border-color: #2b6bff;
      box-shadow: 0 10px 30px rgba(43, 107, 255, 0.08);
    `}
`;

/* Header row inside card */
export const CardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

/* small icon square at top-left */
export const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3a8a;
  /* background-color: green; */
`;

/* Title */
export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #111827;
`;

/* small pill under title */
export const PillSmall = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
`;

/* Price */
export const Price = styled.div`
  margin-top: 14px;
  font-weight: 700;
  font-size: 28px;
  color: #0f172a;
`;

export const PriceUnit = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
  margin-left: 6px;
`;

/* features list */
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 4px;
  /* background-color: green; */
  height:auto;
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #374151;
  font-size: 13px;

  svg {
    color: #34d399;
    flex-shrink: 0;
  }
`;

/* footer area with button */
export const CardFooter = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
`;

/* Call-to-action button */
export const ActionButton = styled.button`
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 700;
  cursor: pointer;
  min-width: 160px;

  ${(p) =>
    p.variant === "primary" &&
    css`
      background: #1e40af;
      color: #fff;
      border-color: #1e40af;
    `}

  ${(p) =>
    p.variant === "ghost" &&
    css`
      background: transparent;
      color: #374151;
      border-color: #e5e7eb;
    `}

  ${(p) =>
    p.variant === "outline" &&
    css`
      background: transparent;
      color: #10b981;
      border-color: #10b981;
      font-weight: 600;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
