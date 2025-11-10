import React from "react";
import { ProfileStyle } from "./ProfileStyle";
import  { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Uchechi from "/Uchechi.jpg";

const Profile = () => {

 const userId = useSelector((state) => state.TrustForge.user?.data?.id);
 console.log("userID", userId)
  const token = useSelector((state) => state.TrustForge.user?.token);

  const [kyc, setKyc] = useState(null);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    if (!userId) return;

    const fetchKyc = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/kyc/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // backend returns { message: "...", data: { ...kyc fields } }
        setKyc(res.data.data);
        console.log("KYC fetched:", res.data.data);
      } catch (error) {
        console.error("Error fetching KYC:", error);
      }
    };

    fetchKyc();
  }, [userId, token, BaseUrl]);

  return (
    <ProfileStyle>
      <div className="Profile_heading">
        <h1>Profile</h1>
        <p>Manage your account information</p>
        <div className="Profssional">
          <aside className="Personal_info">
            <p>Personal Info</p>
          </aside>
          <aside className="Professional_info">
            <p>Professional</p>
          </aside>
        </div>
      </div>
      <div className="Profile_info">
        <article className="Profile_image">
          <div className="Profile_img_holder">
            <aside className="Image_holder">
              <img src={kyc?.profilePic} alt="" />
            </aside>
            <div className="ProIcon"></div>
          </div>
          <div className="Profile_content_holder">
            <article className="Kyc_verified">
              <h3>{kyc?.firstName}</h3>
              <span>{kyc?.verificationStatus}</span>
            </article>

            <div className="Profile_info_holder">
              <div className="Information_kyc">
                <p>{kyc?.email}</p>
              </div>
              <div>
                <p>{kyc?.state}</p>
              </div>
              <div>
                <p>{kyc?.phoneNumber}</p>
              </div>
            </div>
          </div>
        </article>
        <div className="Profile_content_info">
          <article className="Personal_infos">
            <h4>Personal Information</h4>
            <span>From Kyc</span>
          </article>

          <section className="First_name">
            <div className="First">
              <aside className="First_informations">
                <span>First Name</span>
                <p>{kyc?.firstName}</p>
              </aside>
              <aside className="First_informations">
                <span>Email Address</span>
                <p>{kyc?.email}</p>
              </aside>
              <aside className="First_informations">
                <span>Date of birth</span>
                <p>{kyc?.dateOfBirth}</p>
              </aside>
              <aside className="First_informations">
                <span>Residential Address</span>
                <p>{kyc?.residentialAddress}</p>
                <span>{kyc?.state}</span>
              </aside>
            </div>

            <div className="First">
              <aside className="First_informations">
                <span>Last Name</span>
                <p>{kyc?.lastName}</p>
              </aside>
              <aside className="First_informations">
                <span>Phone number</span>
                <p>{kyc?.phoneNumber}</p>
              </aside>
              <aside className="First_informations">
                <span>Nationality</span>
                <p>{kyc?.nationality}</p>
              </aside>
            </div>
          </section>
          <article className="Update">
            <p>
              To update this information, Please contact support or resubmit
              your KYC verification.
            </p>
          </article>
        </div>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
