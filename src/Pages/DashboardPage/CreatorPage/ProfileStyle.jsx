import styled from "styled-components";

export const ProfileStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-family: "Poppins", sans-serif;
  color: #04091a;

  .Profile_heading {
    h1 {
      font-size: 1.4rem;
      font-weight: 800;
      color: #04091a;
      letter-spacing: -0.5px;
      margin: 0 0 4px;
    }

    p {
      font-size: 0.875rem;
      color: #6b7280;
      margin: 0 0 1rem;
    }

    .Profssional {
      display: flex;
      gap: 4px;
      background: #f0f2f8;
      padding: 4px;
      border-radius: 100px;
      width: fit-content;

      button {
        height: 36px;
        padding: 0 20px;
        border: none;
        background: transparent;
        border-radius: 100px;
        cursor: pointer;
        font-size: 0.85rem;
        font-weight: 500;
        color: #6b7280;
        font-family: "Poppins", sans-serif;
        transition: all 0.2s ease;

        &.active {
          background: #0046ff;
          color: #ffffff;
          font-weight: 600;
        }
      }
    }
  }

  .Profile_info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Profile_image {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 1.5rem;
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }

  .Profile_img_holder {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .Image_holder {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background: #f0f2f8;
    border: 2px solid #e5e7eb;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .ProIcon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #0046ff;
    flex-shrink: 0;
  }

  .Profile_content_holder {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .Kyc_verified {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    h3 {
      font-size: 1rem;
      font-weight: 700;
      color: #04091a;
      margin: 0;
    }

    span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: #dcfce7;
      color: #166534;
      padding: 3px 10px;
      border-radius: 100px;
      font-weight: 600;
      font-size: 0.72rem;
    }
  }

  .Profile_info_holder {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    > div p {
      margin: 0;
      font-size: 0.8rem;
      color: #6b7280;
    }
  }

  .Profile_content_info {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Personal_infos {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1rem;
      font-weight: 700;
      color: #04091a;
      margin: 0;
    }

    span {
      height: 36px;
      padding: 0 16px;
      background: transparent;
      border: 1.5px solid #e5e7eb;
      border-radius: 8px;
      font-weight: 600;
      color: #374151;
      font-size: 0.8rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: all 0.2s ease;

      &:hover {
        border-color: #0046ff;
        color: #0046ff;
      }
    }
  }

  .First_name {
    display: flex;
    gap: 1.5rem;
  }

  .First {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .First_informations {
    span {
      font-size: 0.72rem;
      font-weight: 600;
      color: #9ca3af;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    p {
      margin: 4px 0 0;
      font-size: 0.9rem;
      color: #04091a;
      font-weight: 600;
    }
  }

  .Update {
    background: #f8faff;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid #e5e7eb;

    p {
      margin: 0;
      color: #6b7280;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;

    .First_name {
      flex-direction: column;
      gap: 1rem;
    }

    .First { width: 100%; }
  }
`;
