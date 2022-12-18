import React, { useRef} from "react";
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import MyNavbar from "./Navbar";
import FloatingBox from "./FloatingBox";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_u6st48d', 'contact_form', form.current, 'F3ZqmzSZsRTCP-GMK')
            .then(
                () => {
                    alert('message sent successfully...');
                    e.target.user_email.value=""
                    e.target.user_name.value=""
                    e.target.message.value=""
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
        <MyNavbar/>
        
        <div class="contact container-contact">
            <form ref={form} onSubmit={sendEmail}>
                <div class="form">
                    <div class="form-txt">
                        <h1>Connect with Me</h1>
                        <span>Let us build together</span>
                        <h3>India</h3>
                        <p>Gujarat,Vadodara-390019<br/>+91 6351606320</p>
                        
                        <h3>Social</h3>
                        <p> <span><a className="social-media-links" href='https://www.instagram.com/sparsh_pathak2002/'><FaInstagramSquare /></a></span>
                            &nbsp;<span ><a className="social-media-links" href='https://www.linkedin.com/in/sparsh-pathak-3b2386225/'><FaLinkedin /></a></span>
                            &nbsp;<span><a className="social-media-links" href='https://github.com/SPARSHpathak2002'><FaGithubSquare /></a></span></p>
                    </div>
                    <div class="form-details">
                        <input type="text" placeholder="Name" name="user_name"required/>
                        <input type="text" placeholder="Email" name="user_email"  required/>
                        <textarea name="message" id="message" cols="52" rows="7"  placeholder="Message" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
        
        </>
    )
}
export default Contact;