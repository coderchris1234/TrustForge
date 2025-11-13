import styled from "styled-components";

export const ProfileStyle = styled.div`
  width: 92%;
  max-width: 960px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 500px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial;
  color: #111827;

  .Profile_heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

    h1 {
      margin: 0;
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: #6b7280;
    }

    .Profssional {
      width: 420px;
      max-width: 100%;
      height: 44px;
      background-color: #d1d5db;
      margin-top: 12px;
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 6px;
      border-radius: 999px;
    }

    .Profssional button {
      border: none;
      background: transparent;
      padding: 8px 18px;
      border-radius: 999px;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 600;
      color: #374151;
    }

    .Profssional button.active {
      background: #ffffff;
      color: #111827;
      box-shadow: 0 6px 14px rgba(2, 6, 23, 0.06);
    }
  }

  .Profile_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .Profile_image {
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    gap: 18px;
    padding: 16px;
    align-items: center;
    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.04);
    border: 1px solid rgba(15, 23, 42, 0.03);
    box-sizing: border-box;
  }

  .Profile_img_holder {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }

  .Image_holder {
    width: 92px;
    height: 92px;
    border-radius: 50%;
    overflow: hidden;
    background: #eee;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
  }

  .Image_holder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .ProIcon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #0ea5a5;
    flex-shrink: 0;
  }

  .Profile_content_holder {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
  }

  .Kyc_verified {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .Kyc_verified h3 {
    margin: 0;
    font-size: 16px;
    color: #0f172a;
  }

  .Kyc_verified span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background-color: #dcfce7;
    color: #166534;
    padding: 6px 10px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 12px;
  }

  .Profile_info_holder {
    display: flex;
    gap: 18px;
    margin-top: 6px;
    flex-wrap: wrap;
  }

  .Profile_info_holder > div p {
    margin: 0;
    color: #374151;
  }

  .Profile_content_info {
    width: 100%;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.04);
    border: 1px solid rgba(15, 23, 42, 0.03);
    box-sizing: border-box;
  }

  .Personal_infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Personal_infos h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
  }

  .Personal_infos span {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    padding: 6px 10px;
    border-radius: 8px;
    font-weight: 600;
    color: #111827;
    font-size: 13px;
  }

  .First_name {
    width: 100%;
    display: flex;
    gap: 24px;
    margin-top: 4px;
  }

  .First {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .First_informations span {
    font-size: 13px;
    color: #6b7280;
  }

  .First_informations p {
    margin: 4px 0 0 0;
    font-size: 15px;
    color: #111827;
    font-weight: 600;
  }

  .Update {
    margin-top: 8px;
    background-color: #f3f4f6;
    border-radius: 8px;
    padding: 12px;
  }

  .Update p {
    margin: 0;
    color: #6b7280;
    font-size: 13px;
  }

  @media (max-width: 420px) {
    width: 95%;
    margin: 12px auto;
    gap: 12px;

    .Profile_heading h1 {
      font-size: 18px;
    }
    .Profile_heading p {
      font-size: 13px;
    }

    .Profssional {
      width: 260px;
      height: 36px;
      padding: 4px;
    }

    .Profssional button {
      font-size: 13px;
      padding: 6px 12px;
    }

    .Profile_image {
      padding: 12px;
      gap: 12px;
    }

    .Image_holder {
      width: 72px;
      height: 72px;
    }

    .ProIcon {
      width: 32px;
      height: 32px;
    }

    .Kyc_verified h3 {
      font-size: 15px;
    }

    .Kyc_verified span {
      font-size: 12px;
      padding: 5px 8px;
    }

    .Profile_image {
      flex-direction: row;
      align-items: center;
    }

    .Profile_content_holder {
      gap: 6px;
    }

    .First_name {
      flex-direction: column;
      gap: 12px;
    }

    .First {
      width: 100%;
      gap: 10px;
    }

    .First_informations p {
      font-size: 15px;
    }

    .Personal_infos h4 {
      font-size: 16px;
    }

    .Personal_infos span {
      font-size: 12px;
      padding: 5px 8px;
    }

    .Update {
      padding: 10px;
    }

    .Update p {
      font-size: 12px;
    }
  }
`;
