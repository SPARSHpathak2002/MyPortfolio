
const Intro = () => {
    return (
        <div className="Intro-box  p-5 mt-5 mb-4 rounded-3">
            <div className="container-fluid py-4 ">
                <h1 className="display-5 fw-bold">Sparsh Pathak</h1>
                <p className="col-md-8 "><span style={{ color: '#F24C4C' }}>Energetic&nbsp;</span> <i>in learning new skills</i></p>
                <p className="col-md-8 "><span style={{ color: '#EC9B3B' }}>Versatile&nbsp;</span> <i>Devloper</i></p>
                <p className="col-md-8 "><span style={{ color: '#F7D716' }}>Passionate&nbsp;</span><i>for coding</i></p>
            </div>
            <div className="py-4">
                <img src={require('../media/images/profile.jpeg')} alt="hello"/>
            </div>
        </div>

    )
}
export default Intro