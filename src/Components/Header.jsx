import React, { useState } from "react";
import { HeaderContainer } from "./HeaderStyle";
import { MenuNav } from "../Config/Data";
import CustomButton from "./CustomButton";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <HeaderContainer>
      <section className="Header_Wrapper">
        <div className="AppLogo">
          <img src="" alt="TrustForge" />
        </div>

        <nav>
          <ul>
            {MenuNav?.map((menu, index) => (
              <NavLink
                to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                className={activeIndex === index ? "Link active" : "Link"}
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <li>{menu}</li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <section className="Auth_Button">
          <CustomButton className="Btn_Login" Btntext="Login" type="button" />
          <CustomButton
            className="Btn_Login2"
            Btntext="Get started"
            type="button"
          />
        </section>
      </section>
    </HeaderContainer>
  );
};

export default Header;
