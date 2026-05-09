import styled, { css } from "styled-components";

export const Page = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 100px;
  padding: 5px;
  width: fit-content;
`;

export const ToggleButton = styled.button`
  height: 38px;
  padding: 0 22px;
  border-radius: 100px;
  border: none;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  white-space: nowrap;

  ${(props) =>
    props.active &&
    css`
      background: var(--primary_color_500);
      color: #ffffff;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0, 70, 255, 0.25);
    `}

  &:hover:not([disabled]) {
    color: var(--primary_color_500);
  }

  ${(props) =>
    props.active &&
    css`
      &:hover {
        color: #ffffff;
      }
    `}
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1 1 280px;
  max-width: 340px;
  border-radius: 16px;
  background: #ffffff;
  padding: 2rem;
  border: 1.5px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary_color_300);
    box-shadow: 0 12px 40px rgba(0, 70, 255, 0.08);
    transform: translateY(-4px);
  }

  ${(p) =>
    p.featured &&
    css`
      border-color: var(--primary_color_500);
      box-shadow: 0 12px 40px rgba(0, 70, 255, 0.12);
      position: relative;

      &::before {
        content: "Most Popular";
        position: absolute;
        top: -13px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary_color_500);
        color: #ffffff;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        padding: 4px 14px;
        border-radius: 100px;
        white-space: nowrap;
      }
    `}

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.75rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  min-height: 4rem;
`;

export const CardIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary_color_100), #dbeafe);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary_color_500);
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: var(--netural_black_color);
`;

export const PillSmall = styled.div`
  margin-top: 5px;
  font-size: 0.75rem;
  color: #6b7280;
  line-height: 1.4;
`;

export const Price = styled.div`
  margin-top: 1.5rem;
  font-weight: 800;
  font-size: 2rem;
  color: var(--netural_black_color);
  letter-spacing: -1px;
  line-height: 1;
`;

export const PriceUnit = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  color: #9ca3af;
  margin-left: 4px;
  letter-spacing: 0;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.75rem;
  flex: 1;
`;

export const FeatureItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.875rem;
  color: #374151;
  line-height: 1.5;

  svg {
    color: var(--primary_color_500);
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const CardFooter = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.25s ease;
  border: 1.5px solid transparent;

  ${(p) =>
    p.variant === "primary" &&
    css`
      background: var(--primary_color_500);
      color: #ffffff;
      border-color: var(--primary_color_500);

      &:hover:not(:disabled) {
        background: var(--primary_color_700);
        border-color: var(--primary_color_700);
        transform: translateY(-1px);
      }
    `}

  ${(p) =>
    p.variant === "ghost" &&
    css`
      background: transparent;
      color: #374151;
      border-color: #e5e7eb;

      &:hover:not(:disabled) {
        border-color: var(--primary_color_500);
        color: var(--primary_color_500);
      }
    `}

  ${(p) =>
    p.variant === "outline" &&
    css`
      background: transparent;
      color: var(--primary_color_500);
      border-color: var(--primary_color_500);

      &:hover:not(:disabled) {
        background: #eff6ff;
      }
    `}

  &:disabled {
    opacity: 0.55;
    cursor: default;
    transform: none;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    display: inline-block;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
