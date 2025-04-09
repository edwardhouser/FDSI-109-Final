import { useState } from "react";
import "./about.css";


function About() {
    
    const [isVisible, setIsVisible] = useState(false);

    function clickIt(){
        console.log("These aren't the droids you are looking for")
        setIsVisible(true);
    }



    return(
        <div className="about">

            {/* image from public*/}
            <img src="/images/power.jpg" alt="about me"></img>

            {/* image from import*/}
            {/* <img src={imageNameHere}></img> */}
            <h2> Developed by: Ed Houser </h2>
            {isVisible ? <h5> Contact: edward.houser@gmail.com </h5> : null }
            <button onClick={clickIt}> Show More </button>
        </div>

    )   
}
export default About;

