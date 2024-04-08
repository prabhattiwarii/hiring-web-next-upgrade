import React, { useState } from 'react'
import { hasValidationError, focusOnFeild, validationError } from '@/Helpers/frontend';
import { closeIcon } from '@/Helpers/icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const careermodal = ({ onCloseModal, career }) => {
    const [form, setForm] = useState({ first_name: '', last_name: '', email: '', city: '', state: '', qualification: '', resume: '', job_type: career.title, });
    const toastOptions = { position: "bottom-center", autoClose: 3000, hideProgressBar: true, closeOnClick: false, pauseOnHover: false, }
    const [errors, setErrors] = useState([]);
    const [character, setCharacter] = useState(0);
    const maxCharacterLimit = 500;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                var formData = new FormData();
                for (var key in form) {
                    if (key !== "resume") {
                        formData.append(key, form[key] ? form[key] : "");
                    }
                }
                if (form.resume) {
                    formData.append("resume", form.resume);
                }
                form.resume && formData.append("resume", form.resume);
                const accessKey = "d83d8fa0-33be-4bbc-8f35-6aca855e5cb4";
                const response = await axios.post("https://api.web3forms.com/submit", { formData, access_key: accessKey });
                console.log(formData);
                if (response.data.success) {
                    toast.success("form submitted successfully", toastOptions);
                    setForm({ first_name: "", last_name: "", email: "", phone: "", city: "", state: "", qualification: "", resume: "", job_type: "" });
                } else {
                    toast.error("An error occurred during career form submission.", toastOptions);
                }
            } catch (error) {
                toast.error('An error occurred during career form submission.', toastOptions);
            }
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, resume: file });
    };

    const handleKeyPress = (e) => {
        if (e.key && e.key.length === 1 && !/\d/.test(e.key)) {
            e.preventDefault();
        }
    }

    const handleClick = () => {
        const fileInput = document.getElementById('file-input');
        fileInput.click();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'qualification') {
            if (value.length <= maxCharacterLimit) {
                setCharacter(maxCharacterLimit - value.length);
                setForm({ ...form, [name]: value });
            }
        } else {
            setForm({ ...form, [name]: value });
        }
    }
    const validate = () => {
        const newError = {};
        let positionFocus = "";
        const phoneRE = /^(?![0-5])[0-9]{10}$/;
        const emailRe = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        if (!form.first_name || !form.first_name.trim()) {
            newError["first_name"] = "Required";
            positionFocus = positionFocus || "first_name";
        } else if (form.first_name.length > 50) {
            newError["first_name"] = "Maximum 50 characters allowed";
            positionFocus = positionFocus || "first_name";
        }
        if (!form.last_name || !form.last_name.trim()) {
            newError["last_name"] = "Required";
            positionFocus = positionFocus || "last_name";
        } else if (form.last_name.length > 50) {
            newError["last_name"] = "Maximum 50 characters allowed";
            positionFocus = positionFocus || "last_name";
        }
        if (!form.email || !form.email.trim()) {
            newError["email"] = "Required";
            positionFocus = positionFocus || "email";
        } else if (!emailRe.test(form.email)) {
            newError["email"] = "Invalid Email";
            positionFocus = positionFocus || "email";
        }
        if (!form.phone || !form.phone.trim()) {
            newError["phone"] = "Required";
            positionFocus = positionFocus || "phone";
        } else if (!phoneRE.test(form.phone)) {
            newError["phone"] = "Please enter a valid 10-digit phone number.";
            positionFocus = positionFocus || "phone";
        }
        if (!form.city || !form.city.trim()) {
            newError["city"] = "Required";
            positionFocus = positionFocus || "city";
        } else if (form.city.length > 100) {
            newError["city"] = "Maximum 100 characters allowed";
            positionFocus = positionFocus || "city";
        }
        if (!form.state || !form.state.trim()) {
            newError["state"] = "Required";
            positionFocus = positionFocus || "state";
        } else if (form.state.length > 100) {
            newError["state"] = "Maximum 100 characters allowed";
            positionFocus = positionFocus || "state";
        }
        if (!form.qualification || !form.qualification.trim()) {
            newError["qualification"] = "Required";
            positionFocus = positionFocus || "qualification";
        } else if (form.qualification.length > maxCharacterLimit) {
            newError["qualification"] = `Maximum ${maxCharacterLimit} characters allowed`;
            positionFocus = positionFocus || "qualification";
        }
        if (!form.resume) {
            newError["resume"] = "Required";
            positionFocus = positionFocus || "resume";
        }
        setErrors(newError);
        if (positionFocus) {
            focusOnFeild(positionFocus);
            return false;
        }
        return true;
    }

    return (
        <div className="ti-popup-wrap">
            <div className="back" onClick={() => onCloseModal(false)}></div>
            <div className="inner">
                <div className='form-head'>
                    <span>You are applying for {career.title}</span>
                </div>
                <button onClick={() => onCloseModal(false)} className="close">{closeIcon({ width: 16, height: 16 })}</button>
                <div className="body">
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className="form-group">
                            <div className="input-form">
                                <input className={hasValidationError(errors, "first_name") ? "has-input-error" : ""} type="text" placeholder="First Name" name="first_name" value={form.first_name} onChange={handleChange} />
                                {hasValidationError(errors, "first_name") ? (<div className="error">{validationError(errors, "first_name")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <input className={hasValidationError(errors, "last_name") ? "has-input-error" : ""} type="text" placeholder="Last Name" name="last_name" value={form.last_name} onChange={handleChange} />
                                {hasValidationError(errors, "last_name") ? (<div className="error">{validationError(errors, "last_name")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <input className={hasValidationError(errors, "email") ? "has-input-error" : ""} type="text" placeholder="Email Address" name="email" value={form.email} onChange={handleChange} />
                                {hasValidationError(errors, "email") ? (<div className="error">{validationError(errors, "email")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <input className={hasValidationError(errors, "phone") ? "has-input-error" : ""} type="tel" maxLength={10} placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} onKeyPress={handleKeyPress} />
                                {hasValidationError(errors, "phone") ? (<div className="error">{validationError(errors, "phone")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <input className={hasValidationError(errors, "city") ? "has-input-error" : ""} type="text" placeholder="City" name="city" value={form.city} onChange={handleChange} />
                                {hasValidationError(errors, "city") ? (<div className="error">{validationError(errors, "city")}</div>) : null}
                            </div>
                            <div className="input-form">
                                <input className={hasValidationError(errors, "state") ? "has-input-error" : ""} type="text" placeholder="State" name="state" value={form.state} onChange={handleChange} />
                                {hasValidationError(errors, "state") ? (<div className="error">{validationError(errors, "state")}</div>) : null}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <textarea className={hasValidationError(errors, "qualification") ? "has-input-error" : ""} placeholder="Qualifcation Details" name="qualification" value={form.qualification} onChange={handleChange} />
                                {hasValidationError(errors, "qualification") ? (<div className="error">{validationError(errors, "qualification")}</div>) : null}
                                <p className="limit">{character} characters left</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-form">
                                <div className={`file-wrap ${hasValidationError(errors, "resume") ? "has-input-error" : ""}`}>
                                    <input type="file" id="file-input" accept='image/*,.doc,.docx,.ppt,.pptx,.pdf' style={{ display: 'none' }} onChange={handleFileChange} />
                                    {form.resume ?
                                        (<><span className="file-text">{form.resume.name}</span><button className="browse" type="button" onClick={handleClick}>Change</button></>) :
                                        (<><span className="upload-text">Upload your resume</span><button className="browse" type="button" onClick={handleClick}>Browse</button></>)
                                    }
                                </div>
                                {hasValidationError(errors, "resume") ? (<div className="error">{validationError(errors, "resume")}</div>) : null}
                            </div>
                        </div>
                        <div className='form-btn'>
                            <button className='apply-btn'>SUBMIT NOW</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default careermodal