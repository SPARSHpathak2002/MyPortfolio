import React,{createContext,useReducer} from "react";
import MyNavbar from "./components/Navbar";
import Intro from "./components/Intro";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills"
import Projects from "./components/Projectlist";


import { FilterReducer } from "./reducer";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Contact from "./components/contact";
import Footer from "./components/footer";
const App = () =>{
  const FilterContext=createContext();
  const [data,dispatch]=useReducer(FilterReducer);

  return (
    <div className=" container py-4">
    <MyNavbar/>
    <Intro/>
    <Aboutme/>
    <Skills/>
    <FilterContext.Provider value={{data,dispatch}}>
    <Projects/>
    </FilterContext.Provider>
    <Contact/>
    <Footer/>

    </div>
  )
}
export default App