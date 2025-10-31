import React, { useState } from "react";
import { HeaderContainer } from "./HeaderStyle";
import { MenuNav } from "../Config/Data";
import CustomButton from "./CustomButton";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setBlogIndex } from "../Pages/Global/Slice";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  const blogIndex = useSelector((state) => state.TrustForge.blogIndex);
  const nav = useNavigate();
  const dispatch = useDispatch();
  // console.log("blogIndex", blogIndex);
  return (
    <HeaderContainer>
      <section className="Header_Wrapper">
        <div className="AppLogo">
          <img src={Logo} />
        </div>

        <nav>
          <ul>
            {MenuNav?.map((menu, index) => (
              <NavLink
                to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                className={
                  activeIndex || blogIndex === index ? "Link active" : "Link"
                }
                key={index}
                onClick={() => {
                  setActiveIndex(index), dispatch(setBlogIndex(null));
                }}
              >
                <li>{menu}</li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <section className="Auth_Button">
          <CustomButton
            className="Btn_Login"
            Btntext="Login"
            type="button"
            onClick={() => {
              nav("/login");
            }}
          />
          <CustomButton
            className="Btn_Login2"
            Btntext="Get started"
            type="button"
            onClick={() => {
              nav("/signup");
            }}
          />
        </section>
      </section>
    </HeaderContainer>
  );
};

export default Header;
