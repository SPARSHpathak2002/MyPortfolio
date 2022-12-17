import React from 'react'
import { Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap'
// import { Link } from "react-scroll"activeClass='active' spy={true} smooth={true} offset={-55} duration={500};
import {Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {FaHome}from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si"
import { GiSkills} from "react-icons/gi"
import { GrProjects, GrContact } from "react-icons/gr"
import FloatingBox from './FloatingBox';


//Framer Animation
const itemAnimation = {
  open: {
    y: 10,
    opacity: 1,
    transition: { duration: 1 }
  },
  close: {
    y: -10,
    opacity: 0,
    transition: { duration: 1 }
  }
};
const NavigatorAnimation = {
  open: {
    rotate: 180
  },
  close: {
    rotateZ: 0
  }
}
const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar className="mb-3" fixed="top" style={{ direction: 'rtl' }} >
        <motion.div className='Navigation'>
          <OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>Navigator</Tooltip>}>
            <motion.div
              className="Navigatior"
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.span
                initial={false}
                animate={isOpen ? "open" : "close"}
                variants={NavigatorAnimation}
              >
                +
              </motion.span>
            </motion.div>
          </OverlayTrigger>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "close"}
            variants={{
              open: {
                transition: {
                  type: "spring",
                  bounce: 0.8,
                  duration: 0.3,
                  delayChildren: 0.1,
                  staggerChildren: 0.08
                }
              },
              close: {
                transition: {
                  type: "spring",
                  bounce: 0.8,
                  duration: 0.3,
                  delayChildren: 0.1,
                  staggerChildren: 0.08
                }
              }
            }}
            style={isOpen ? { display: "block", position: "absolute" } : { display: "none", position: "absolute" }}
          >
            <motion.li
              className="ListItem"
              whileTap={{ scale: 0.8 }}
              variants={itemAnimation}
              onClick={() => setIsOpen(!isOpen)}
            >
              <OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>Introduction</Tooltip>}>
                <Link className='l-i' to="/" onClick={() => setIsOpen(!isOpen)} ><FaHome className='l-i' /></Link>
            </OverlayTrigger>
            </motion.li>
            <motion.li
              className="ListItem"
              whileTap={{ scale: 0.8 }}
              variants={itemAnimation}
              onClick={() => setIsOpen(!isOpen)}
            >
              <OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>About me</Tooltip>}>
                <Link to="/aboutme" onClick={() => setIsOpen(!isOpen)} ><SiAboutdotme className='l-i'/></Link>
            </OverlayTrigger>
            </motion.li>
            <motion.li
              className="ListItem"
              whileTap={{ scale: 0.8 }}
              variants={itemAnimation}
              onClick={() => setIsOpen(!isOpen)}
            >
              <OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>Skills</Tooltip>}>
                <Link to="/skills" onClick={() => setIsOpen(!isOpen)}><GiSkills className='l-i'/></Link>
              </OverlayTrigger>
            </motion.li>
            <motion.li
              className="ListItem"
              whileTap={{ scale: 0.8 }}
              variants={itemAnimation}
              onClick={() => setIsOpen(!isOpen)}
            >
              <OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>Projects</Tooltip>}>
                <Link to="/projects" onClick={() => setIsOpen(!isOpen)} ><GrProjects /></Link>
              </OverlayTrigger>
            </motion.li>

            <motion.li
              className="ListItem"
              whileTap={{ scale: 0.8 }}
              variants={itemAnimation}
              onClick={() => setIsOpen(!isOpen)}
            ><OverlayTrigger key='left' placement='left' overlay={<Tooltip id='tooltip-left'>Connect</Tooltip>}>
                <Link to="/contact" onClick={() => setIsOpen(!isOpen)} activeClass='active' spy={true} smooth={true} offset={-55} duration={500}><GrContact /></Link>
              </OverlayTrigger>
            </motion.li>
          </motion.div>
        </motion.div>
      </Navbar>
    </>
  )
}
export default MyNavbar;