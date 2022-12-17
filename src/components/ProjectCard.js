import { Card } from "react-bootstrap"
const ProjectCard = (props) => {
    return (
        <Card className='p-c m-2 pro-card'style={{ width: '20rem' }} >
            <Card.Body>
                <Card.Title style={{color:'white'}}>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">category :&nbsp;{props.cat} </Card.Subtitle>
                <Card.Text >
                    <i>
                    {props.desc}
                    </i>
                </Card.Text>
                <Card.Link style={{color:'#F7D716',textDecoration:'none'}} href={props.gitlink}>GitHub</Card.Link>
                {props.weblink==='NA'?(
                    <Card.Link style={{color:'#F24C4C',textDecoration:'none'}} href={props.weblink}></Card.Link>
                ):(
                    <Card.Link style={{color:'#F24C4C',textDecoration:'none'}} href={props.weblink}>Website</Card.Link>
                )}

            </Card.Body>
        </Card >
    )
}
export default ProjectCard