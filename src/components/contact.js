import React, { useRef } from "react";
import { Col, Row, FloatingLabel, Form, Button } from "react-bootstrap";
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
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <>
        <MyNavbar/>
        {/* <div id="Connect" className="contactme  p-5 mt-5 mb-4 rounded-3"> */}
             {/* <h1 className="display-5 fw-bold" style={{textAlign:'center'}}>
                    <div class="text-container">
                        <span>C</span>
                        <span>o</span>
                        <span>n</span>
                        <span>n</span>
                        <span>e</span>
                        <span>c</span>
                        <span>t</span>
                        <span>&nbsp;</span>
                        <span>w</span>
                        <span>i</span>
                        <span>t</span>
                        <span>h</span>
                        <span>&nbsp;</span>
                        <span>m</span>
                        <span>e</span>
                       
                    </div>
                </h1>
                <br/>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <p><i>" Hey there , Lets us collab and do some exciting projects together "</i></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Location : <span style={{ color: '#F7D716' }}><i>India</i></span></p>
                        </Col>
                    </Row>
                    <Row>
                    <Row>
                        <Col>
                            <p>Email :<span style={{ color: '#F7D716' }}><i> sparshpathak2002@gmail.com</i></span></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Mobile no :<span style={{ color: '#F7D716' }}><i>+91 631606320</i></span></p>
                        </Col>
                    </Row>
                        <p style={{ "margin-bottom": " 0px" }}>Follow </p>
                        <p className="m-l">
                            <span><a className="social-media-links" href='https://www.instagram.com/sparsh_pathak2002/'><FaInstagramSquare /></a></span>
                            <span ><a className="social-media-links" href='https://www.linkedin.com/in/sparsh-pathak-3b2386225/'><FaLinkedin /></a></span>
                            <span><a className="social-media-links" href='https://github.com/SPARSHpathak2002'><FaGithubSquare /></a></span>
                        </p>
                    </Row>
                </Col>
                <Col>


                    <form ref={form} onSubmit={sendEmail}>

                        <Row><input type="text" placeholder="Name" name="user_name" className="ContactInput" required/></Row>
                        <Row><input type="text" placeholder="Email" name="user_email" className="ContactInput" required/></Row>
                        <Row><textarea name='message' style={{height:'200px'}}className="ContactInput" type='text' placeholder='Message' required></textarea></Row>
                        <Row><Button type="submit" className="EmailSendButton">SEND</Button></Row>
                        {/* <input type='text' placeholder='Name' name='user_name' />
          <input type='email' placeholder='Email address' name='user_email' />
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='Message'></textarea>
        </div>
        <input type='submit' value='Submit' id='input-submit' /> */}
                    {/* </form>
                </Col>
            </Row> */} 
        {/* </div> */}
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
                        <input type="text" placeholder="Name" name="user_name" required/>
                        <input type="text" placeholder="Email" name="user_email" required/>
                        <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </div>
            </form>
        </div>
        
        </>
    )
}
export default Contact;