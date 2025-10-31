import React from "react";
import { ProfileStyle } from "./ProfileStyle";

const Profile = () => {
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
              <img src="" alt="" />
            </aside>
            <div className="ProIcon"></div>
          </div>
          <div className="Profile_content_holder">
            <article className="Kyc_verified">
              <h3>Uchechi Ogbonna</h3>
              <span>KYC Verified</span>
            </article>

            <div className="Profile_info_holder">
              <div className="Information_kyc">
                <p>ogbonnauchechi4@gmail.com</p>
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
            <span>From Kyc</span>
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
    </ProfileStyle>
  );
};

export default Profile;
