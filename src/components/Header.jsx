import PinContainer from "./PinContainer";
import CounterDisplay from "./UI/CounterDisplay/CounterDisplay";
import Logo from "./UI/Logo/Logo";
import favouriteImg from '../assets/img/favourite-icon.svg'
import shoppingCartImg from '../assets/img/shopping-cart-icon.svg'

const Header = ({ children, ...props }) => {
    return (
        <header className="header header_position" {...props}>
            <div className="header__inner-container header_alignment">
                <Logo logoText={"QPICK"} className="logo_position" />
                <PinContainer>
                    <div className="pin-container__favourite-icon_position">
                        <CounterDisplay
                            counter={2}
                            imagePath={favouriteImg}
                            alt="favourite-icon"
                            position={{ x: 36, y: 12 }}
                        />
                    </div>
                    <div className="pin-container__shopping-cart-icon_position">
                        <CounterDisplay
                            counter={1}
                            imagePath={shoppingCartImg}
                            alt="shopping-cart-icon"
                            position={{ x: 36, y: 13 }}
                        />
                    </div>
                </PinContainer>
            </div>
        </header>
    );
}

export default Header;