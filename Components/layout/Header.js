import React, { useState } from "react";
import Link from "next/link";
import style from "./header.module.css";

function Header() {
  const [showInfoinfo, setShowUserInfo] = useState(false);
  const [showDevelopment, setShowDevelopment] = useState(false);

const handleShowDevelopment = () => {
    setShowDevelopment(true)
  }

  const handleHideDevelopment = () => {
    if (showDevelopment) {
      setShowDevelopment(false);
    }
  }

const handleShowUserInfo = () => {
    setShowUserInfo(true)
  }

  const handleMouseLeave = () => {
    if (showInfoinfo) {
      setShowUserInfo(false);
    }
  };

  return (
    <div className={style.navwrap}>
      <div className={style.companyLogoWrap}>
        <Link className={style.companyLogoWrap} href="/">
          C-J<span>Tech</span>
        </Link>
      </div>
      <div className={style.navbar}>
        <Link href="/" className={style.home}>
          Home
        </Link>
        <Link href="/company" className={style.Company}>
          Company
        </Link>

        <div href="/services" className={`${style.Services} ${style.subParent}`} onMouseLeave={handleMouseLeave} onMouseOver={handleShowUserInfo} >
          <a className={style.ServicesNew} href="/services" >Services</a>
          {
            showInfoinfo && (
              <div className={style.ServicesMain}>
               <Link className={style.Services1} href="mobile" onMouseLeave={handleMouseLeave} onMouseOver={handleShowDevelopment}>Mobile App Development
             
               </Link>
                <Link className={style.Services1} href="website">Web Development</Link>
                <Link className={style.Services1} href="ui">Ui/Ux Design</Link>
                <Link className={style.Services1} href="application">Application Maintence & Support</Link>
                <Link className={style.Services1} href="hire">Hire Dedicated Developers</Link>
              </div>
            )}
            </div>

        <Link href="/portfolio" className={style.Portfolio}>
          Portfolio
        </Link>
        <Link href="/career" className={style.Career}>
          Career
        </Link>
        <Link href="/contact" className={style.Contact}>
          Contact
        </Link>
       
        <Link href="/contact" className={style.Contact1}>
          <span>&gt;</span> <div>LetsChat</div>
        </Link>
        </div>
 

    </div>
  );
}
export default Header;



