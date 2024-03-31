import VK from '../assets/img/vk-icon.svg'
import TG from '../assets/img/telegram-icon.svg'
import WhatsApp from '../assets/img/whatsapp-icon.svg'

import '../App.css'
import { Link } from 'react-router-dom'

const Contacts = () => {

    return (
        <section className="contacts">
            <Link
                to={'https://vk.com/neoflex_ru'}
                target="_blank"
                rel="noreferrer noopener"
                className='contacts_alignment'
            >
                <img src={VK} alt="VK-icon" className='contacts__img' />
            </Link>
            <Link
                to={'https://t.me/neoflexcareers'}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={TG} alt="Telegram-icon" className='contacts__img' />
            </Link>
            <Link
                to={'https://www.whatsapp.com/'}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={WhatsApp} alt="WhatsApp-icon" className='contacts__img' />
            </Link>
        </section >
    );
}

export default Contacts;