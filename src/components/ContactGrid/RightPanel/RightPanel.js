import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './RightPanel.css'

function RightPanel() {
    return ( 
    <div className="contact-div">
        <div  className='email-div contact-item'>
            <h1 className='link-title'>Email</h1>
            <h2 className='contact-content'> <AlternateEmailIcon className='contact-icon' /> jennyh871@gmail.com</h2>
            
        </div>
        <div className='github-div contact-item'>
        <h1 className='link-title'>GitHub</h1> 
            <h2 className='contact-content'> <GitHubIcon className='contact-icon' /> 
            <a className='link' href='https://github.com/jh871' target='_blank' rel="noreferrer"> /jh871</a> </h2>
        </div>
        <div className='linkedin-div contact-item'> 
        <h1 className='link-title'>LinkedIn</h1> 
            <h2 className='contact-content'> <LinkedInIcon className='contact-icon' /> 
            <a className='link' href='https://www.linkedin.com/in/jenniferhull01/' target='_blank' rel="noreferrer"> /jenniferhull01 </a> </h2>
        </div>
    </div>
    );
}
//sx={{fontSize:'large'}}
export default RightPanel;