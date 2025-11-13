import React, { useState } from "react";
import { HeaderContainer } from "./HeaderStyle";
import { MenuNav } from "../Config/Data";
import CustomButton from "./CustomButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setBlogIndex } from "../Pages/Global/Slice";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState();
  const [showMenu, setShowMenu] = useState(false);
  const blogIndex = useSelector((state) => state.TrustForge.blogIndex);
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <section className="Header_Wrapper">
        <div className="AppLogo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <nav className={showMenu ? "MobileNav" : ""}>
          <ul>
            {MenuNav?.map((menu, index) => (
              <NavLink
                to={menu === "Home" ? "/" : `/${menu.toLowerCase()}`}
                className={
                  activeIndex === index || blogIndex === index
                    ? "Link active"
                    : "Link"
                }
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  dispatch(setBlogIndex(null));
                  setShowMenu(false);
                }}
              >
                <li>{menu}</li>
              </NavLink>
            ))}
          </ul>

          <section className="Auth_Button mobile">
            <CustomButton
              className="Btn_Login"
              Btntext="Login"
              type="button"
              onClick={() => nav("/login")}
            />
            <CustomButton
              className="Btn_Login2"
              Btntext="Get started for free"
              type="button"
              onClick={() => nav("/signup")}
            />
          </section>
        </nav>

        <section className="Auth_Button desktop">
          <CustomButton
            className="Btn_Login"
            Btntext="Login"
            type="button"
            onClick={() => nav("/login")}
          />
          <CustomButton
            className="Btn_Login2"
            Btntext="Get started for free"
            type="button"
            onClick={() => nav("/signup")}
          />
        </section>

        <div className="MenuIcon" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </section>
    </HeaderContainer>
  );
};

export default Header;
