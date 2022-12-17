import React from "react";
import MyNavbar from "./components/Navbar";
import Intro from "./components/Intro";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills"
import Contact from "./components/contact";
import Footer from "./components/footer";
import ProjectWrapper from "./components/ProjectWrapper";
//react router dom 
import { BrowserRouter, Routes, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"


const App = () =>{
  // return (
  //   <div className=" container py-4">
  //   <MyNavbar/>
  //   <Intro/>
  //   <Aboutme/>
  //   <Skills/>
  //   <FilterContext.Provider value={{data,dispatch}}>
  //   <Projects/>
  //   </FilterContext.Provider>
  //   <Contact/>
  //   <Footer/>

  //   </div>
  // )

  return(
    <div className=" container py-4">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/aboutme" element={<Aboutme/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<ProjectWrapper/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App