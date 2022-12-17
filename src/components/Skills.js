import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaPython,FaDocker,FaHtml5,FaNodeJs,FaReact} from "react-icons/fa"
import {SiCplusplus,SiDjango,SiFlask,SiJavascript,SiRedux,SiMysql} from "react-icons/si"
import MyNavbar from "./Navbar";
import { motion } from "framer-motion";
const Skills=()=>{
    return(
        <>
        <MyNavbar/>
        <div id='Skills' className="skills  p-5 mt-5 mb-4 rounded-3">
           <h1 className="fw-bold" style={{textAlign:'center',letterSpacing:"2px"}}>
                    <div class="text-container">
                        <span>S</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                    </div>
                </h1>
           <br/>
           <div className="skill-box">
               {/* <Col>
                <Row>
                    <div className="s-box">
                        <FaPython style={{fontSize:'50px'}}/>
                        <p>Python</p>
                    </div>
                    <div className="s-box">
                        <SiCplusplus style={{fontSize:'50px'}}/>
                        <p>C++</p>
                    </div>
                    <div className="s-box">
                        <SiDjango style={{fontSize:'50px'}}/>
                        <p>Django</p>
                    </div>
                    <div className="s-box">
                        <SiFlask style={{fontSize:'50px'}}/>
                        <p>Flask</p>
                    </div>
                    <div className="s-box">
                        <FaDocker style={{fontSize:'50px'}}/>
                        <p>Docker</p>
                    </div>
                    <div className="s-box">
                        <FaHtml5 style={{fontSize:'50px'}}/>
                        <p>HTML</p>
                    </div>
                    <div className="s-box">
                        <SiJavascript style={{fontSize:'50px'}}/>
                        <p>JS</p>
                    </div>
                    <div className="s-box">
                        <FaNodeJs style={{fontSize:'50px'}}/>
                        <p>Node</p>
                    </div>
                    <div className="s-box">
                        <FaReact style={{fontSize:'50px'}}/>
                        <p>React</p>
                    </div>
                    <div className="s-box">
                        <SiRedux style={{fontSize:'50px'}}/>
                        <p>Redux</p>
                    </div>
                    <div className="s-box">
                        <SiMysql style={{fontSize:'50px'}}/>
                        <p>Mysql</p>
                    </div>
                </Row>
               </Col> */}
               <Col>
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <FaPython style={{fontSize:'50px'}}/>
                    <p>Python</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'95%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">95%</div>
                    </div>
                </Row>
               
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <SiCplusplus style={{fontSize:'50px'}}/>
                        <p>C++</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'95%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">95%</div>
                    </div>
                </Row>

                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <SiDjango style={{fontSize:'50px'}}/>
                        <p>Django</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'80%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">80%</div>
                    </div>
                </Row>

                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <SiFlask style={{fontSize:'50px'}}/>
                        <p>Flask</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'80%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">80%</div>
                    </div>
                </Row>
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <FaDocker style={{fontSize:'50px'}}/>
                        <p>Docker</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'70%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">70%</div>
                    </div>
                </Row>
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <FaHtml5 style={{fontSize:'50px'}}/>
                        <p>HTML</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'90%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">90%</div>
                    </div>
                </Row>
               </Col>

               <Col>
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <SiMysql style={{fontSize:'50px'}}/>
                        <p>Mysql</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'90%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">90%</div>
                    </div>
                </Row>
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <SiJavascript style={{fontSize:'50px'}}/>
                        <p>JS</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'90%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">90%</div>
                    </div>
                </Row>
                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <SiRedux style={{fontSize:'50px'}}/>
                        <p>Redux</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'70%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">70%</div>
                    </div>
                </Row>

                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <FaReact style={{fontSize:'50px'}}/>
                        <p>React</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'93%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">93%</div>
                    </div>
                </Row>

                <Row>
                   <div className="skill-single">
                    <div className="skill-item">
                    <FaNodeJs style={{fontSize:'50px'}}/>
                        <p>Node</p>
                    </div>
                    
                    <div className="bar">
                    <motion.div className="bar-inner"
                    whileInView={{
                        width:'90%',
                        transition:{
                            duration:2
                        }
                    }}
                    ></motion.div>
                    </div>
                    <div className="bar-value">90%</div>
                    </div>
                </Row>
               
               </Col>
           </div>

        </div>
        </>
    )
}
export default Skills