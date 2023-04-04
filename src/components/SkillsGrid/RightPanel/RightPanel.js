
import './RightPanel.css'

function RightPanel() {
    return ( 
    <div className="skills-div">
        <div className='skill-container'>
            <h2 className='skill-type'>Structure</h2>
            <h3 className='skill-content'> HTML - JQuery - JSX </h3>
        </div>
        <div className='skill-container'>
            <h2 className='skill-type'>Styling</h2>
            <h3 className='skill-content'> CSS - Bootstrap - MUI </h3>
        </div>
        <div className='skill-container'>
            <h2 className='skill-type'>Frameworks</h2>
            <h3 className='skill-content'> React </h3>
        </div>
        <div className='skill-container'>
            <h2 className='skill-type'>Function</h2>
            <h3 className='skill-content'> JavaScript </h3>
        </div>
        <div className='skill-container'>
            <h2 className='skill-type'>Deployment</h2>
            <h3 className='skill-content'> GitHub - Netlify </h3>
        </div>
        <div className='skill-container'>
            <h2 className='skill-type'>Also</h2>
            <h3 className='skill-content'> Git - Node - Yarn - NPM - Markdown </h3>
        </div>
    </div>
    );
}

export default RightPanel;