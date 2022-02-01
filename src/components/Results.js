import React from "react";
import "../styles/Results.css"

const Results = ()=>(
    <div className="results-container">
        <div>  
            <h1 className="ins-head">Instructions</h1>
            <h3>1. Our IOT device will take blood smear as input. Magnify it and separate individual cell images.</h3>
            <h3>2. The images will be fed into the AI (on this website) to detect malarial cells.</h3>
            <h3>3. We have created this website to provide a glimpse of our AI. The full operation will be performed on our IOT device and Android application.</h3>
            <h3>4. Please Upload cell images as input. </h3>
            <h3>5. You can download few cell images from the folder <span className="url">https://1drv.ms/u/s!AjOpwoGi3yCRhWj-Tsa4mz4MBZOj?e=cuJmN9</span>so there shall be no need to search for.</h3>
            <h3>6. Our AI hasn't been trained on the provided images.</h3>
        </div>      
    </div>
)

export default Results