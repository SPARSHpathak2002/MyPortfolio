import React from "react";
const Aboutme = () => {
    const wishes = () => {
        var today = new Date();
        var h = today.getHours();
        if (h >= 0 && h <= 12) {
            return 'Good Morning';
        }
        else if (h <= 14) {
            return 'Good Afternoon';
        }
        else {
            return 'Good Evening';
        }
    }
    return (
        <div id='AboutMe'className=" About-me p-5 mt-5 mb-4">
            <div className="abt-img">
                <img  src={require('../media/images/AbtMe.png')}></img>
            </div>
            <div style={{paddingLeft:'60px'}} >
                <h1>About Me</h1>
                <p>
                    {wishes()} ,My name is Sparsh Jayrajkumar Pathak , I am a Third year college student pursuing <i style={{color:'#F24C4C'}}><strong>Bachelor of Technology (BTech)&nbsp;&nbsp;</strong></i> in
                    <i style={{color:'#F7D716'}}><strong> Computer Science and Engineering </strong></i>
                </p>
            </div>
        </div>
    )
}
export default Aboutme