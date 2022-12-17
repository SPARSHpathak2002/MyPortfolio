import React, { createContext, useReducer } from "react";
import { FilterReducer } from "../reducer";
import Projects from "./Projectlist";
const ProjectWrapper = () => {
    const FilterContext = createContext();
    const [data, dispatch] = useReducer(FilterReducer);
    return (
        <>
            <FilterContext.Provider value={{ data, dispatch }}>
                <Projects />
            </FilterContext.Provider>
        </>
    );
}
export default ProjectWrapper;