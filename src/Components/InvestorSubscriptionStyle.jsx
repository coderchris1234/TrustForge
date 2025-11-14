import styled, { css } from "styled-components";

/* Page wrapper */
export const Page = styled.div`
  width: 100%;
  padding: 20px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

/* Toggle buttons row */
export const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const ToggleButton = styled.button`
  border: 1px solid #d1d5db;
  padding: 6px 20px;
  border-radius: 8px;
  background: #f3f4f6;
  color: #374151;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  transition: all 150ms ease;
  font-size: 14px;
  width: max-content;

  ${(props) =>
    props.active &&
    css`
      background: #fff;
      border-color: #9ca3ff;
      color: #111827;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.12);
    `}

  @media (max-width: 480px) {
    padding: 6px 14px;
    font-size: 13px;
  }
`;

/* Cards row: use flex so we can stretch children to same height */
export const CardsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 95%;
  justify-content: center;
  align-items: stretch; /* <-- important: stretch children to same height */
  flex-wrap: wrap; /* allow wrapping for smaller screens */
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

/* Each Card is a column flex container so we can manage header/feature/footer layout */
export const Card = styled.div`
  border-radius: 12px;
  background: #fff;
  padding: 18px;
  border: 2px solid #e5e7eb;

  display: flex;
  flex-direction: column; /* column layout: header -> features -> footer */
  justify-content: flex-start;
  width: calc(33.333% - 13.333px); /* three cards per row by default; adjust as needed */
  box-sizing: border-box;
  /* ensure all cards share same available height in a row */
  flex: 1 1 calc(33.333% - 13.333px);

  ${(p) =>
    p.featured &&
    css`
      border-color: #2b6bff;
      box-shadow: 0 10px 30px rgba(43, 107, 255, 0.08);
    `}

  @media (max-width: 1024px) {
    /* two cards per row on medium screens */
    width: calc(50% - 10px);
    flex: 1 1 calc(50% - 10px);
  }

  @media (max-width: 768px) {
    /* single column on small/mobile */
    width: 100%;
    flex: 1 1 100%;
    padding: 16px;
  }

  /* IMPORTANT: ensure card takes full height when parent stretches */
  /* If you need a minimum height for visual balance, set it here */
  min-height: 18rem;
`;

/* Header row inside card */
/* Give header a consistent minimum height so Features start at same vertical offset */
export const CardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  /* set a min-height so the area above features is consistent across cards */
  min-height: 4.5rem; /* adjust this value until Features line up perfectly */
`;

/* small icon box */
export const CardIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3a8a;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #111827;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

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

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const PriceUnit = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #6b7280;
  margin-left: 6px;
`;

/* features list */
/* Keep it a column and allow it to grow/shrink; use padding-top if you need extra spacing */
export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 4px;
  margin-top: 50px; /* small gap between header/price and features */

  span {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  /* make features area flexible so footer stays pinned to bottom */
  flex: 1 1 auto;
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #374151;
  font-size: 13px;

  svg {
    color: blue;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
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
  min-width: 170px;
  font-size: 14px;
  height: 50px;

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
      color: blue;
      border-color: blue;
      font-weight: 600;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  @media (max-width: 480px) {
    padding: 8px 14px;
    font-size: 13px;
    min-width: 140px;
  }
`;
