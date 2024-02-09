import twitterIcon from './assets/twitter-icon.svg'
import facebookIcon from './assets/facebook-icon.svg'
import instagramIcon from './assets/instagram-icon.svg'
import githubIcon from './assets/gitHub-icon.svg'

export default function Footer() {
    return (
        <footer>
            <img src={twitterIcon} alt="Twitter icon" className='icon'/>
            <img src={facebookIcon} alt="Facebook icon" className='icon'/>
            <img src={instagramIcon} alt="Instagram icon" className='icon'/>
            <img src={githubIcon} alt="Github icon" className='icon'/>
        </footer>
    )
}