import React from "react";
import { Col, Row } from "react-bootstrap";
import {FaPython,FaDocker,FaHtml5,FaNodeJs,FaReact} from "react-icons/fa"
import {SiCplusplus,SiDjango,SiFlask,SiJavascript,SiRedux,SiMysql} from "react-icons/si"
const Skills=()=>{


    return(
        <div id='Skills' className="skills  p-5 mt-5 mb-4 rounded-3">
           <h1 style={{textAlign:'center'}}>Skills</h1>
           <br/>
           <div className="container-fluid">
               <Col>
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
               </Col>
           </div>

        </div>
    )
}
export default Skills