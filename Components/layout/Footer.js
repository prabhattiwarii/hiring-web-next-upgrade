import React from 'react'
import style from "./Footer.module.css";



const Footer = () => {
  return (

    <div className={style.mainsection}>
    <div className={style.mainwrap}>


<div className={style.wraptestimonial}>
<div className={style.mainwrap1}>C-J Technology</div>
<div className={style.mainwrap2}>C-J Technology is committed to delivering innovative, qualitative, and customized IT solutions using vast experience and Superior skills for its Happy Clients.</div>
</div>


<div className={style.wraptestimonial1}>
<div className={style.mainwrapmain}>IT Services</div>
<div className={style.colorlist}>
<li className={style.mainwrap1}>Mobile App Development</li>
<li className={style.mainwrap1}>Web Developer</li>
<li className={style.mainwrap1}>UI/UX Design</li>
<li className={style.mainwrap1}>Application Maintenance & Support</li>
<li className={style.mainwrap1}>Hire Dedicated Developers</li>
</div>

</div>

<div className={style.wraptestimonial1}>
<div className={style.mainwrapmain}>Contact Info</div>
<div className={style.wrap}>
<div className={style.mainwrap1}>Near ,Sugar-Complex<br/> 709 A-D National Highway Delhi-NCR</div>
<div className={style.mainwrap1}>jobiskille@gmail.com</div>

<div className={style.mainwrap2}>Monday to Friday -09:00am - 6:00pm</div>
</div>
</div>
 </div>

<div className={style.Bottom}>Copyright &copy; {new Date().getFullYear()} <a href="/" className={style.Bottom1} style={{fontWeight:600}}><span style={{color:"skyblue" }}>&nbsp; Coding Jobs </span> <span style={{color:"skyblue"}}>Technologies &nbsp;</span></a> Pvt. Ltd. | All rights Reserved.</div>
</div>

  )
}

export default Footer;



