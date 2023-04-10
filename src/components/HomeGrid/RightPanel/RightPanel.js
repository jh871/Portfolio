import { Link } from 'react-router-dom';
import './RightPanel.css'

function RightPanel() {
    return ( 
    <div className="intro-div">
        <h1 className="intro-header">Hi, I'm Jen. <br />
        I do front-end web development.</h1>
        <div className='text-div'>
            <p className="home-text">
                I enjoy designing and building web page applications with JavaScript and React. After completing a skills certificate in Front-End web dev I am currently working on additional projects. 
                <br />
                <br />
                My aim is to try and expand my skills into back-end so I can create more advanced apps. I am excited to keep learning!
                <br />
                <br />
                I can usually be found somewhere in Suffolk holding a hot chocolate and waving at other people's dogs. I am available for local or remote work.
                <br />
                <br />
                </p>
                <h3 className='more-label'>Learn more:</h3>
                <div className='learn-more'>
                    <h3 className='cv more-item'> CV </h3>
                    <Link to='/skills'> <h3 className='skills more-item'>Skills</h3></Link>
                    <Link to='/projects'><h3 className='projects more-item'>Projects</h3></Link> 
                    <Link to='/contact'> <h3 className='contact more-item'>Contact</h3></Link>
                </div>
        </div>
    </div>
    );
}

export default RightPanel;