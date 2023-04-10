
import './Footer.css'

function Footer() {
    return ( 
        <div className='footer-div'>
            <div className='footer-text'>  
                <h3 className='footer-h3 footer-credit'> Jennifer Hull 2023 || 
                    <a href='https://github.com/jh871/Portfolio/' target='_blank' rel="noreferrer" className='footer-link'> visit the repo</a>
                </h3>
            </div>
            <h6 className='footnote'>If you're reading this: this page is finished but could use some further development, check back later! </h6>
        </div>
    );
}
export default Footer;