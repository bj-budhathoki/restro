import React from "react";
import logo from "../../logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="icons green-icon">icon</div>
        <div className="timing">
          <span>Mon to Fri : 11:00am- 10:00pm</span>
          <span>Sat to Sun : 08:00am- 11:00pm</span>
        </div>
      </div>

      <div className="header__middle">
        <img src={logo} alt="site-logo" />
      </div>

      <div className="header__right">
        <div className="icons green-icon">icon</div>
        <div className="address">
          167 Science Center Drive <br />
          +180-123-4567
        </div>
      </div>
    </header>
  );
};
export default Header;
