import PinContainer from "./PinContainer";
import CounterDisplay from "./UI/CounterDisplay/CounterDisplay";
import Logo from "./UI/Logo/Logo";
import favouriteImg from '../assets/img/favourite-icon.svg'
import shoppingCartImg from '../assets/img/shopping-cart-icon.svg'
import '../styles/Header.css'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Header = ({ children, ...props }) => {

    const nav = useNavigate();

    const { basket } = useContext(BasketContext);

    return (
        <header className="header header_position" {...props}>
            <section className="header__inner-container header_alignment">
                <Logo
                    logoText={"QPICK"}
                    className="logo_position"
                    onClick={() => nav('/products')}
                />
                <PinContainer>
                    <section className="pin-container__favourite-icon_position">
                        <CounterDisplay
                            counter={0}
                            imagePath={favouriteImg}
                            alt="favourite-icon"
                            position={{ x: 36, y: 12 }}
                        />
                    </section>
                    <section className="pin-container__shopping-cart-icon_position">
                        <CounterDisplay
                            counter={basket.length}
                            imagePath={shoppingCartImg}
                            alt="shopping-cart-icon"
                            position={{ x: 36, y: 13 }}
                            onClick={() => nav('/basket')}
                        />
                    </section>
                </PinContainer>
            </section>
        </header>
    );
}

export default Header;