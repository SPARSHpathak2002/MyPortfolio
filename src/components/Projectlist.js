import React, { useEffect, useReducer } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from '../projects';
import { Col, Form, Row } from "react-bootstrap";
import MyNavbar from "./Navbar";
import { FilterReducer } from "../reducer";
import FloatingBox from "./FloatingBox";
const Projects = () => {


    const [data, dispatch] = useReducer(FilterReducer, projects)

    useEffect(() => {
        dispatch({
            type: "FILTER",
            payload: "_",
        })
    }, [])


    const handlesubmit = (e) => {
        dispatch({
            type: "FILTER",
            payload: e.target.value,
        })
    }
    return (
        <>
            <MyNavbar />
            <div id='project_list' className="p-5  mb-4">
                <h1 className="display-5 fw-bold" style={{ textAlign: 'center',letterSpacing:"2px" }}>
                    <div class="text-container">
                        <span>P</span>
                        <span>r</span>
                        <span>o</span>
                        <span>j</span>
                        <span>e</span>
                        <span>c</span>
                        <span>t</span>
                        <span>s</span>
                    </div>
                </h1>
                <Form.Select className="dropdown" aria-label="Default select example" onChange={(e) => { handlesubmit(e) }} >
                    <option value="_">Best</option>
                    <option value="ML">Machine Learning</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                    <option value="react">React</option>
                </Form.Select>
                <Col>
                    <Row>
                        {
                            data.map((pro, index) => (
                                <ProjectCard key={index} title={pro.title} cat={pro.subcategory} desc={pro.description} gitlink={pro.gitlink} weblink={pro.weblink} />
                            ))


                        }

                    </Row>
                </Col>
            </div>
        </>
    )
}
export default Projects
