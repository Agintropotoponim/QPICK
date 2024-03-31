import Logo from "./UI/Logo/Logo";
import '../styles/Footer.css'

import LangList from "./UI/LangList/LangList";
import { langList } from "../langList";
import { useContext } from "react";
import { LangContext } from "../context/langContext";
import Contacts from "./Contacts";

const Footer = () => {

    const { selectedLang, setSelectedLang } = useContext(LangContext);

    return (
        <footer className="footer footer_text">
            <section className="footer__section footer__logo-section">
                <Logo logoText={"QPICK"} />
            </section>
            <section className="footer__main-section">
                <section className="footer__section">
                    <p className="footer_pointer">Избранное</p>
                    <p className="footer_pointer">Корзина</p>
                    <p className="footer_pointer">Контакты</p>
                </section>
                <section className="footer__section">
                    <section className="footer__section footer_pointer">
                        Условия сервиса
                    </section>
                    <section className="footer__section">
                        <LangList
                            langList={langList}
                            selectedLang={selectedLang}
                            setSelectedLang={setSelectedLang}
                        />
                    </section>
                </section>
            </section>
            <section className="footer__contacts-section">
                <Contacts />
            </section>
        </footer>
    );
}

export default Footer;