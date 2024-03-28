import React from 'react'
import style from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={style.footerwrap}>
            <div className={style.footertop}>
                <div className={style.footerdetails}>
                    <div className={style.detailsheading}><a href="#">C-J Technology</a></div>
                    <div className={style.text}>C-J Technology is committed to delivering innovative, qualitative, and customized IT solutions using vast experience and Superior skills for its Happy Clients.</div>
                </div>
                <div className={style.footerdetails}>
                    <div className={style.detailsheading}>IT Services</div>
                    <ul className={style.footerlists}>
                        <li className={style.footerlist}><a href="#">Mobile App Development</a></li>
                        <li className={style.footerlist}><a href="#">Web Developer</a></li>
                        <li className={style.footerlist}><a href="#">UI/UX Design</a></li>
                        <li className={style.footerlist}><a href="#">Application Maintenance & Support</a></li>
                        <li className={style.footerlist}><a href="#">Hire Dedicated Developers</a></li>
                    </ul>
                </div>
                <div className={style.footerdetails}>
                    <div className={style.detailsheading}>Contact Info</div>
                    <ul className={style.contactlist}>
                        <li className={style.address}>Near ,Sugar-Complex<br /> 709 A-D National Highway Delhi-NCR</li>
                        <li className={style.email}>jobiskille@gmail.com</li>
                        <li className={style.timing}>Monday to Friday <br />09:00am - 6:00pm</li>
                    </ul>
                </div>
            </div>
            <div className={style.footerbottom}>
                <div className={style.footercopyright}>
                    Copyright &copy; {new Date().getFullYear()} <a href="/" className={style.Bottom1} style={{ fontWeight: 600 }}><span style={{ color: "skyblue" }}>&nbsp; Coding Jobs </span> <span style={{ color: "skyblue" }}>Technologies &nbsp;</span></a> Pvt. Ltd. | All rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer;



