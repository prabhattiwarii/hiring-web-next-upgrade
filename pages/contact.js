import Layout from "@/Components/layout/Layout";
import React, { useState } from "react";
import style from "./contact.module.css";
import { emailIcon, mapIcon, phoneIcon } from "@/Helpers/icon";
import axios from "axios";
import { hasValidationError, validationError,focusOnFeild } from "@/Helpers/frontend";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", message: "",interest:"",website:""})
    const toastOptions = {position:"bottom-center",autoClose:3000,hideProgressBar:true,closeOnClick:false,pauseOnHover:false,}
    const [error, setErrors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const accessKey = "d83d8fa0-33be-4bbc-8f35-6aca855e5cb4";
                const response = await axios.post("https://api.web3forms.com/submit", { ...form, access_key: accessKey });
                if(response.data.success){
                    toast.success("form submitted successfully", toastOptions);
                    setForm({first_name: "",last_name: "", email: "", phone: "", message: "", website:"",interest:""});
                } else {
                    toast.error("An error occurred during form submission.", toastOptions);
                }
            } catch (error) {
                console.log(error);
                toast.error('An error occurred during form submission.',toastOptions);
            }
        }
    }

    const handleKeyPress =(e) =>{
        if (e.key && e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    }
    const hasSameDigits = (phone) => {
        return /^(.)\1+$/.test(phone);
    }

    const validate = () => {
        const newError = {};
        let positionFocus = "";
        const emailRe = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        // eslint-disable-next-line
        const phoneRE = /^[0-9]{10}$/;
         const urlRE = /^(https?:\/\/)?(?!w\.com)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        if(!form.first_name || !form.first_name.trim()){
            newError["first_name"] = "Required";
            positionFocus = positionFocus || "first_name";
        }else if(form.first_name.length > 20){
            newError["first_name"] = "Maximum 20 characters allowed";
            positionFocus = positionFocus || "first_name";
        }
        if(!form.last_name || !form.last_name.trim()){
            newError["last_name"] = "Required";
            positionFocus = positionFocus || "last_name";
        }else if(form.last_name.length > 20){
            newError["last_name"] = "Maximum 20 characters allowed";
            positionFocus = positionFocus || "last_name";
        }
        if(!form.email || !form.email.trim()){
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        }else if(!emailRe.test(form.email)){
            newError["email"] = "Invalid Email";
            positionFocus = positionFocus || "email";
        }
        if (!form.phone || !form.phone.trim()) {
            newError["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        } else if (!phoneRE.test(form.phone) || hasSameDigits(form.phone)) {
            newError["phone"] = "Please enter a valid 10-digit phone number with non-repeating digits.";
            positionFocus = positionFocus || "phone";
        }
        if (form.website && !urlRE.test(form.website)) {
            newError["website"] = "Please enter a valid website URL.";
            positionFocus = positionFocus || "website";
        }
        if (!form.interest || !form.interest.trim()) {
            newError["interest"] = "Required";
            positionFocus = positionFocus || "interest";
        }
        if(!form.message || !form.message.trim()){
            newError["message"] = "Required";
            positionFocus = positionFocus || "message";
        }
        setErrors(newError);
        if(positionFocus){
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }
    return (
        <Layout>
            <div className={style.wrapper}>
            <div className={style.contactwrap}>
                <div className={style.contactinfo}>
                    <div className={style.contactheading}>Contact Info</div>
                    <p className={style.contacttext}>Always Excited to Discuss Unique Solution For Business</p>
                    <div className={style.contactcall}>
                        <a href="tel:9301829416" className={style.contactwrapinner}>
                            <span>{phoneIcon({width:18,height:18,fill:"skyblue"})}</span>
                            <div className={style.heading}><div className={style.headingDetail}>Phone</div>+91-9301829416</div>
                        </a>
                        <a href="mailto:prabhattiwari9629@gmail.com" className={style.contactwrapinner}>
                            <span>{emailIcon({width:18,height:18,fill:"skyblue"})}</span>
                            <div className={style.heading}><div className={style.headingDetail}>Email</div>prabhattiwari9629@gmail.com</div>
                        </a>
                        <a href="https://www.google.com/maps?q=SCO+40,2nd+Floor,Sector+11,Panchkula,Haryana,India" target="_blank" rel="noopener noreferrer" className={style.contactwrapinner}>
                            <span>{mapIcon({width:18,height:18,fill:"skyblue"})}</span>
                            <div className={style.heading}><div className={style.headingDetail}>Address</div>SCO 40, 2nd Floor, Sector 11, Panchkula, Haryana, India</div>
                        </a>
                    </div>
                    <div className={style.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109778.02692604!2d76.70652620645801!3d30.70255967075429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f936ed6a2b757%3A0x898668d7061b40f0!2sPanchkula%2C%20Haryana!5e0!3m2!1sen!2sin!4v1696438764296!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" frameBorder="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="unique"></iframe>
                    </div>
                </div>
                <div className={style.contactinfo}>
                    <div className={style.contactHeading}>Let’s get Started!</div>
                    <p className={style.contactText}>Request your FREE Consultation.</p>
                    <form action="" className={style.form} onSubmit={handleSubmit} autoComplete="off">
                        <div className={style.formGroup}>
                            <div className={style.inputForm}>
                                <label htmlFor="firstName">First Name</label>
                                <input className={hasValidationError(error, "first_name") ? style.hasInputError : ""} type="text" placeholder="First Name" name="first_name" value={form.first_name} onChange={handleChange} />
                                {hasValidationError(error, "first_name") ? (<div className={style.error}>{validationError(error, "first_name")}</div>) : null}
                            </div>
                            <div className={style.inputForm}>
                                <label htmlFor="lastName">Last Name</label>
                                <input className={hasValidationError(error, "last_name") ? style.hasInputError : ""} type="text" placeholder="Last Name" name="last_name" value={form.last_name} onChange={handleChange} />
                                {hasValidationError(error, "last_name") ? (<div className={style.error}>{validationError(error, "last_name")}</div>) : null}
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.inputForm}>
                                <label htmlFor="email">Email</label>
                                <input className={hasValidationError(error, "email") ? style.hasInputError : ""} type="text" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
                                {hasValidationError(error, "email") ? (<div className={style.error}>{validationError(error, "email")}</div>) : null}
                            </div>
                            <div className={style.inputForm}>
                                <label htmlFor="phone">Phone Number</label>
                                <input className={hasValidationError(error, "phone") ? style.hasInputError : ""} type="text" maxLength={10} placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} onKeyPress={handleKeyPress} />
                                {hasValidationError(error, "phone") ? (<div className={style.error}>{validationError(error, "phone")}</div>) : null}
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.inputForm}>
                                <label htmlFor="website" className={`${style.input} ${hasValidationError(error, "website") ? style.hasInputError : ""}`}>Website</label>
                                <input name="website" type="text" placeholder="www.example.com" value={form.website} onChange={handleChange} />
                                {hasValidationError(error, "website") && <span className={style.error}>{validationError(error, "website")}</span>}
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.inputForm}>
                                <label htmlFor="interest">Interest</label>
                                <select onChange={handleChange} value={form.interest} name="interest" className={hasValidationError(error, "interest") ? style.hasInputError : ""}>
                                    <option value="">Select</option>
                                    <option value="website-design">Website Design</option>
                                    <option value="website-development">Website Development</option>
                                    <option value="online-marketing">Online Marketing (Adwords/Remarketing)</option>
                                </select>
                                {hasValidationError(error, "interest") ? (<div className={style.error}>{validationError(error, "interest")}</div>) : null}
                            </div>
                        </div>
                        <div className={style.formGroup}>
                            <div className={style.inputForm}>
                                <label htmlFor="description">Description</label>
                                <textarea className={hasValidationError(error, "message") ? style.hasInputError : ""} placeholder="Type your message..." name="message" value={form.message} onChange={handleChange} />
                                {hasValidationError(error, "message") ? (<div className={style.error}>{validationError(error, "message")}</div>) : null}
                            </div>
                        </div>                       
                        <div className={style.formbtn}>
                            <button className={style.applybtn} type='submit'>SUBMIT NOW</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <ToastContainer />
        </Layout>
    );
};

export default Contact;
