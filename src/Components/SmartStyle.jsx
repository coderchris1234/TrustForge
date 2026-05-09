import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const SmartContainer = styled.section`
  width: 100%;
  background: #f5f0e8;
  padding: 7rem 1.5rem;
  display: flex;
  justify-content: center;

  .Smart_wrapper {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    animation: ${fadeUp} 0.8s ease forwards;
  }

  /* ── Header row ── */
  .Smart_left {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: end;

    .Smart_left_content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .section_label {
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: #191919;
      opacity: 0.5;
    }

    h3 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900;
      color: #191919;
      margin: 0;
      line-height: 1.0;
      letter-spacing: -2px;

      span { color: #191919; }
    }

    .Smart_right_desc p {
      font-size: 1rem;
      color: #666;
      line-height: 1.8;
      margin: 0;
    }
  }

  /* ── Bento grid ── */
  .Smart_right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    .Smart_right_content {
      display: contents;
    }

    .Smart_card {
      background: #ffffff;
      border: 1px solid #e8e3d8;
      border-radius: 20px;
      padding: 2.5rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      transition: all 0.25s ease;

      &:hover {
        border-color: #191919;
        transform: translateY(-3px);
        box-shadow: 6px 6px 0 #191919;
      }

      .Smart_card_cont {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .Smart_img {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: #191919;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        color: #b9ff66;
      }

      h3 {
        font-size: 1.05rem;
        font-weight: 700;
        color: #191919;
        margin: 0;
      }

      span {
        font-size: 0.875rem;
        color: #666;
        line-height: 1.65;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;

    .Smart_left {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  @media (max-width: 640px) {
    padding: 4rem 1.25rem;

    .Smart_right {
      grid-template-columns: 1fr;
    }
  }
`;
