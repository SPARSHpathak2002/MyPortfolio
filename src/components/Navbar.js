import React from 'react'
import { Navbar, Nav, Container,Offcanvas, Tooltip,OverlayTrigger} from 'react-bootstrap'
import { Link } from "react-scroll";


const MyNavbar = () => {
   
    return (
        <>
                <Navbar key={false} expand={false} className="mb-3" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>Navigator</Tooltip>}>
                        <Navbar.Toggle className='toggler mr-5' aria-controls='offcanvasNavbar-expand-false' >+</Navbar.Toggle>
                        </OverlayTrigger>
                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand-false'
                            aria-labelledby='offcanvasNavbarLabel-expand-false'
                            placement="end"
                            style={{backgroundColor:'#293462'}}
                        >
                            <Offcanvas.Header className='canvas-header' closeButton >
                                <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                                    
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="mx-auto">
                                    <Nav.Link  className='n-l'><Link to="AboutMe" activeClass='active' spy={true} smooth={true} offset={-55} duration={500}>AboutMe</Link></Nav.Link>
                                    <Nav.Link className='n-l'><Link to="Skills" activeClass='active' spy={true} smooth={true} offset={-150} duration={550}>Skills</Link></Nav.Link>
                                    <Nav.Link className='n-l'><Link to="project_list" activeClass='active' spy={true} smooth={true} offset={-55} duration={500}>Projects</Link></Nav.Link>
                                    <Nav.Link className='n-l'><Link to="Connect" activeClass='active' spy={true} smooth={true} offset={-55} duration={500}>Connect</Link></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
    )
}
export default MyNavbar