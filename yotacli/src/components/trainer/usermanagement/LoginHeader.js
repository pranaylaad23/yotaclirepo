import React from "react";
import loginCss from './LoginHeader.css';

function LoginHeader() {
  return (
    <>
      <nav
        className="navbar navbar-light bg-light"
        style={{ height: "60px", padding: "8px 16px" }}
      >
        <a className={`navbar-brand ${loginCss.yashimage}`}>
          <img src="Images/yashlogo.png" alt="yash-logo" />
        </a>
      </nav>
    </>
  );
}
export default LoginHeader;
