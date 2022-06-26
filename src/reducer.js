import { projects } from "./projects";

export const FilterReducer =(state,action)=>{
    switch (action.type) {
        case "FILTER":
            return projects.filter(obj=>obj.maincategory === action.payload)
    
        default:
            break;
    }
}