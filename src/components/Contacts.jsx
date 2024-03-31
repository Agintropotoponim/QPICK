import VK from '../assets/img/vk-icon.svg'
import TG from '../assets/img/telegram-icon.svg'
import WhatsApp from '../assets/img/whatsapp-icon.svg'

import '../App.css'

const Contacts = () => {
    return (
        <section className="contacts">
            <img src={VK} alt="VK-icon" className='contacts__img' />
            <img src={TG} alt="Telegram-icon" className='contacts__img' />
            <img src={WhatsApp} alt="WhatsApp-icon" className='contacts__img' />
        </section>
    );
}

export default Contacts;