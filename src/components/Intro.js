import "./../customCSS/animateText.css"
import "./../customCSS/Titleanimation.css"
import FloatingBox from "./FloatingBox"
import MyNavbar from "./Navbar"
const Intro = () => {
    return (
        <div className=" container py-4">
        <MyNavbar/>
        <div className="Intro-box  p-5 mt-5 mb-4 rounded-3">
            <div className="container-fluid py-4 ">
                <h1 className="display-5 fw-bold">
                    <div class="text-container">
                        <span>S</span>
                        <span>p</span>
                        <span>a</span>
                        <span>r</span>
                        <span>s</span>
                        <span>h</span>
                        <span>&nbsp;</span>
                        <br className="viewcheck" />
                        <span>P</span>
                        <span>a</span>
                        <span>t</span>
                        <span>h</span>
                        <span>a</span>
                        <span>k</span>
                    </div>
                </h1>
                <p><div className="TextAnimate"><span style={{ color: '#80C0C0' }}>Energetic&nbsp;</span></div> <div className="TextAnimate"><span><i>in learning new skills</i></span></div></p>
                <p><div className="TextAnimate"><span style={{ color: '#80C0C0' }}>Versatile&nbsp;</span></div> <div className="TextAnimate"><span><i>Devloper</i></span></div></p>
                <p><div className="TextAnimate"><span style={{ color: '#80C0C0' }}>Passionate&nbsp;</span></div> <div className="TextAnimate"><span><i>for coding</i></span></div></p>
                {/* <p className="col-md-8 "><div className="TextAnimate"><span style={{color: '#F7D716' }}>Passionate&nbsp;</span></div> <div className="TextAnimate"><span><i>for coding</i></span></div></p> */}

            </div>
            <div className="py-4">
                <img src={require('../media/images/profile.jpeg')} alt="hello" />
            </div>
        </div>
        <FloatingBox/>
        </div>
    )
}
export default Intro