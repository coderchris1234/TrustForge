import styled, { keyframes } from "styled-components";
import role1 from "../../assets/role1.jpg";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ChooseRoleContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  @media (max-width: 900px) { flex-direction: column; }
`;

export const ChooseRole_left = styled.div`
  width: 48%;
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,29,104,0.5) 100%),
    url(${role1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem 3rem;
  position: sticky;
  top: 0;
  height: 100vh;

  img {
    height: 2.8rem;
    width: auto;
    cursor: pointer;
    object-fit: contain;
  }

  .Left_quote {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    blockquote {
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-weight: 700;
      color: #ffffff;
      line-height: 1.4;
      margin: 0;
    }

    p { font-size: 0.9rem; color: rgba(255,255,255,0.7); margin: 0; }
  }

  @media (max-width: 900px) {
    width: 100%;
    min-height: 260px;
    height: 260px;
    position: relative;
    padding: 1.75rem 1.5rem;
    .Left_quote { display: none; }
  }
`;

export const ChoosRole_right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 3rem 2rem;
  min-height: 100vh;

  .role_content {
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    animation: ${fadeInUp} 0.7s ease forwards;
  }

  .role_header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #04091a;
      letter-spacing: -0.5px;
      margin: 0;
    }

    p {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
    }
  }

  @media (max-width: 900px) {
    min-height: unset;
    padding: 3rem 1.5rem 4rem;
    align-items: flex-start;
  }
`;

export const Roles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Startup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #ffffff;

  &:hover {
    border-color: #0046ff;
    background: #f0f5ff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,70,255,0.1);
  }

  .role_icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: #04091a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #ffffff;
    flex-shrink: 0;
  }

  .role_text {
    display: flex;
    flex-direction: column;
    gap: 3px;

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #04091a;
      margin: 0;
    }

    p {
      font-size: 0.825rem;
      color: #6b7280;
      margin: 0;
    }
  }

  .role_arrow {
    margin-left: auto;
    font-size: 1.2rem;
    color: #9ca3af;
    transition: color 0.2s ease;
  }

  &:hover .role_arrow { color: #0046ff; }
`;

export const Investor = styled(Startup)``;
