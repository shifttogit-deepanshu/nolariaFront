import React from "react";
import "../styles/Sections.css"
import Section1 from "./Section1";
import Section2 from "./Section2";

const Sections = ()=>{
    return (
        <div className="sections-container">
            <Section1 />
            <Section2 />
        </div>
    )
}

export default Sections