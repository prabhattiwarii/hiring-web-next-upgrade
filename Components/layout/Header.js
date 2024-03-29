import React, { useState } from "react";
import Link from "next/link";
import style from "./header.module.css";
import { barIcon, crosIcon } from "@/Helpers/icon";

function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const handleToggleClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    return (
        <div className={style.navwrap}>
            <div className={style.companyLogoWrap}>
                <Link className={style.companyLogoWrap} href="/">C-J<span>Tech</span></Link>
            </div>
            <div className={`${!isMobileNavOpen ? style.navbar :style.navopens}`}>
                {isMobileNavOpen &&
                <div className={style.companyLogoWrap}>
                    <Link className={style.companyLogoWrap} href="/">C-J<span>Tech</span></Link>
                </div>
                }
                <Link href="/" className={style.home}>Home</Link>
                <Link href="/company" className={style.Company}>Company</Link>
                <div href="/services" className={`${style.Services} ${style.subParent}`} >
                    <a className={style.ServicesNew} href="/services" >Services</a>
                    {(
                        <div className={style.ServicesMain}>
                            <Link className={style.Services1} href="mobile">Mobile App Development</Link>
                            <Link className={style.Services1} href="website">Web Development</Link>
                            <Link className={style.Services1} href="ui">Ui/Ux Design</Link>
                            <Link className={style.Services1} href="application">Application Maintence & Support</Link>
                            <Link className={style.Services1} href="hire">Hire Dedicated Developers</Link>
                        </div>
                    )}
                </div>
                <Link href="/portfolio" className={style.Portfolio}>Portfolio</Link>
                <Link href="/career" className={style.Career}>Career</Link>
                <Link href="/contact" className={style.Contact}>Contact</Link>
                <Link href="/contact" className={style.Chat}><span>&gt;</span> <div>Lets' Chat</div></Link>
            </div>
            <button className={style.togglebutton} onClick={handleToggleClick}>
                {isMobileNavOpen ? <>{crosIcon({width:24,height:24,fill:"#2e2e2e"})}</> : <>{barIcon({width:24,height:24,fill:"#2e2e2e"})}</>}
            </button>
        </div>
    );
}
export default Header;



