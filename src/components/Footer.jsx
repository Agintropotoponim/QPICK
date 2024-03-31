import Logo from "./UI/Logo/Logo";
import '../styles/Footer.css'

import LangList from "./UI/LangList/LangList";
import { langList } from "../langList";
import { useContext } from "react";
import { LangContext } from "../context/langContext";
import Contacts from "./Contacts";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {

    const { selectedLang, setSelectedLang } = useContext(LangContext);
    const nav = useNavigate();

    return (
        <footer className="footer footer_text">
            <section className="footer__section footer__logo-section">
                <Logo
                    logoText={"QPICK"}
                    onClick={() => nav('/products')}
                />
            </section>
            <section className="footer__main-section">
                <section className="footer__section">
                    <p className="footer_pointer">Избранное</p>
                    <p
                        className="footer_pointer"
                        onClick={() => nav('/basket')}
                    >
                        Корзина
                    </p>
                    <p>
                        <Link
                            to={'https://www.neoflex.ru/contacts'}
                            className={'footer_text footer_pointer'}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Контакты</Link>
                    </p>
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