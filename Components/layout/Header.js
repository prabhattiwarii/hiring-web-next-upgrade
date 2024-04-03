import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./header.module.css";
import { barIcon, crosIcon } from "@/Helpers/icon";

function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    const handleToggleClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };
    const router = useRouter(); 
    return (
        <header className={`${sticky ?style.mainWrap  : style.dark}`}>
        <div className={style.navwrap}>
            <div className={style.companyLogoWrap}>
                <Link href="/" className={style.companyLogoWrap}>C-J<span>Tech</span></Link>
            </div>
            <div className={`${!isMobileNavOpen ? style.navbar : style.navopens}`}>
                {isMobileNavOpen &&
                <div className={style.companyLogoWrap}>
                    <Link href="/" className={style.companyLogoWrap}>C-J<span>Tech</span></Link>
                </div>
                }
                <Link href="/" className={`${style.home} ${router.pathname === "/" ? style.active : ""}`}>Home</Link>
                <Link href="/company" className={`${style.Company} ${router.pathname === "/company" ? style.active : ""}`}>Company</Link>
                <div className={`${style.Services} ${style.subParent}`} >
                    <Link href="/services/android-dev" className={`${style.ServicesNew} ${router.pathname === "/services/android-dev" ? style.active : ""}`} >Services</Link>
                    {(
                        <div className={style.ServicesMain}>
                            <Link href="/services/android-dev" className={style.Services1}>Mobile App Development</Link>
                            <Link href="/services/larvel-dev" className={style.Services1}>Web Development</Link>
                            <Link href="/services/ui" className={style.Services1}>Ui/Ux Design</Link>
                            <Link href="/services/application-dev" className={style.Services1}>Application Maintence & Support</Link>
                            <Link href="/services/hire-dev" className={style.Services1}>Hire Dedicated Developers</Link>
                        </div>
                    )}
                </div>
                <Link href="/portfolio" className={`${style.Portfolio} ${router.pathname === "/portfolio" ? style.active : ""}`}>Portfolio</Link>
                <Link href="/career" className={`${style.Career} ${router.pathname === "/career" ? style.active : ""}`}>Career</Link>
                <Link href="/contact" className={`${style.Contact} ${router.pathname === "/contact" ? style.active : ""}`}>Contact</Link>
                <Link href="/contact" className={`${style.Chat} ${router.pathname === "/contact" ? style.active : ""}`}><span>&gt;</span> <div>Lets' Chat</div></Link>
            </div>
            <button className={style.togglebutton} onClick={handleToggleClick}>
                {isMobileNavOpen ? <>{crosIcon({width:24,height:24,fill:"#2e2e2e"})}</> : <>{barIcon({width:24,height:24,fill:"#2e2e2e"})}</>}
            </button>
        </div>
        </header>
    );
}

export default Header;
