import avatar from './assets/avatar.png'
import mailIcon from './assets/mail-icon.svg'
import linkedinIcon from './assets/linkedin-icon.svg'


export default function Info() {
    return (
        <div className='info'>
            <img src={avatar} alt="Example image." className='avatar' />
            <h1>Laura Smith</h1>
            <p className='subtitle'>Frontend Developer</p>
            <p className='website'>laurasmith.website</p>
            <div className='contact-links flex'>
                <a href="#" className='btn flex mail-btn'><img src={mailIcon} alt="Mail icon" />Email</a>
                <a href="#" className='btn flex linkedin-btn'><img src={linkedinIcon} alt="LinkedIn icon" />LinkedIn</a>
            </div>
        </div>
    )
}