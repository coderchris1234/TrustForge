import React, { useState } from "react";
import { ProfileStyle } from "./ProfileStyle";
import Professional from "../../../Components/Professional";
import { CiCamera } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const [mode, setMode] = useState("personal");
  const userId = useSelector((state) => state.TrustForge.user?.data?.id);
  console.log("userID", userId);
  const token = useSelector((state) => state.TrustForge.user?.token);

  const [kyc, setKyc] = useState(null);
  const BaseUrl = import.meta.env.VITE_BaseUrl;

  useEffect(() => {
    if (!userId) return;

    const fetchKyc = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/kyc/${userId}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setKyc(res?.data?.data);
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
          <button
            type="button"
            className={`Personal_info ${mode === "personal" ? "active" : ""}`}
            onClick={() => setMode("personal")}
          >
            <p>Personal Info</p>
          </button>

          <button
            type="button"
            className={`Professional_info ${
              mode === "professional" ? "active" : ""
            }`}
            onClick={() => setMode("professional")}
          >
            <p>Professional</p>
          </button>
        </div>
      </div>
      {mode === "personal" ? (
        <div className="Profile_info">
          <article className="Profile_image">
            <div className="Profile_img_holder">
              <aside className="Image_holder">
                <img src="" alt="profile" />
              </aside>
              {/* <div className="ProIcon">
                    <CiCamera size={23}/>
                </div> */}
            </div>

            <div className="Profile_content_holder">
              <article className="Kyc_verified">
                <h3>{kyc?.firstName}</h3>
                <span>KYC Verified</span>
              </article>

              <div className="Profile_info_holder">
                <div className="Information_kyc">
                  <p>{kyc?.email}</p>
                </div>
                <div>
                  <p>Lagos, Nigeria</p>
                </div>
                <div>
                  <p>+234 901 7634 832</p>
                </div>
              </div>
            </div>
          </article>

          <div className="Profile_content_info">
            <article className="Personal_infos">
              <h4>Personal Information</h4>
              <span>From KYC</span>
            </article>

            <section className="First_name">
              <div className="First">
                <aside className="First_informations">
                  <span>First Name</span>
                  <p>Uchechi</p>
                </aside>

                <aside className="First_informations">
                  <span>Email Address</span>
                  <p>ogbonnauchechi4@gmail.com</p>
                </aside>

                <aside className="First_informations">
                  <span>Date of birth</span>
                  <p>02-11-1965</p>
                </aside>

                <aside className="First_informations">
                  <span>Residential Address</span>
                  <p>15, Church Street New Site Satellite Town</p>
                  <span>Lagos, Nigeria</span>
                </aside>
              </div>

              <div className="First">
                <aside className="First_informations">
                  <span>Last Name</span>
                  <p>Ogbonna</p>
                </aside>

                <aside className="First_informations">
                  <span>Phone number</span>
                  <p>+234 906 0496 537</p>
                </aside>

                <aside className="First_informations">
                  <span>Nationality</span>
                  <p>Nigerian</p>
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
      ) : (
        <Professional />
      )}
    </ProfileStyle>
  );
};

export default Profile;
