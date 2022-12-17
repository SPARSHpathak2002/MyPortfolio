import React from "react";
import { Col, Row } from "react-bootstrap";
import MyNavbar from "./Navbar"
import FloatingBox from "./FloatingBox";
const Aboutme = () => {
    
    return (
        <>
        <MyNavbar/>
        <div id='AboutMe'className=" About-me p-5 mt-5 mb-4">
            <Col >
                <Row >
                <div className="box">
                    <h1>2+</h1>
                    <p>Experience<br></br><sup>years</sup></p>
                    
                </div>
                </Row>
                <Row className="set-box-row">
                <div className="box">
                    <h1>2+</h1>
                    <p>Internship</p>
                </div>
                </Row>
            </Col>
            <Col className="set-box-col">
                <Row>
                <div className="box">
                    <h1>4+</h1>
                    <p>Certifications</p>
                </div>
                </Row>
                <Row className="set-box-row">
                <div className="box">
                    <h1>10+</h1>
                    <p>Projects</p>
                </div>
                </Row>
            </Col>
            <div className="abt-mob">
            <h1 className="display-5 fw-bold">
                    <div class="text-container">
                        <span>A</span>
                        <span>b</span>
                        <span>o</span>
                        <span>u</span>
                        <span>t</span>
                        <span>&nbsp;</span>
                        <span>M</span>
                        <span>e</span>
                    </div>
                </h1>
                <p>
                    My name is Sparsh Jayrajkumar Pathak , I am a Third year college student pursuing <i style={{color:'#80C0C0'}}><strong>Bachelor of Technology (BTech)&nbsp;&nbsp;</strong></i> in
                    <i style={{color:'#80C0C0'}}><strong> Computer Science and Engineering </strong></i>
        
                </p>
                <p>I love teaching myself new things. I started with programming in high school and college, then learned about data science, machine learning, Operating Systems, DBMS, Networking and all the rest. Now that I’ve gotten a taste of teaching myself, I can’t stop. It’s advantageous, and I hope to learn more about the field as my career progresses.
                </p>

            </div>
        </div>
        <FloatingBox/>
        </>
    )
}
export default Aboutme