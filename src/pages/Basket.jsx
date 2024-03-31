import { useContext, useState } from "react";
import Header from "../components/Header";
import { BasketContext } from "../context/BasketContext";
import Footer from "../components/Footer";
import BasketCard from "../components/UI/BasketCard/BasketCard";
import '../styles/Basket.css'
import Modal from "../components/UI/Modal/Modal";

const Basket = () => {

    const { basket, setBasket } = useContext(BasketContext);

    const [modal, setModal] = useState(false);

    let total = 0;

    for (let pr of basket) {
        total += pr.totalPrice;
    }

    const splitPrice = (price) => {
        price += "";
        let priceArr = price?.split('').reverse();
        for (let i = 3; i < priceArr.length; i += 4) {
            priceArr.splice(i, 0, ' ');
        }
        return priceArr.reverse().join("");
    }

    return (
        <main className="basket-page">
            <div>
                <section className="basket">
                    <p className="basket__title">Корзина</p>
                    <div className="basket-list">
                        <div className="basket__item">
                            {basket.map(pr =>
                                <BasketCard product={pr} key={pr.id} splitPrice={splitPrice} />
                            )}
                        </div>
                        <Modal isModal={modal} setIsModal={setModal}>
                            <section className="total__button" onClick={() => { setBasket([]); setModal(false) }}>
                                Купить
                            </section>
                        </Modal>
                        {
                            basket.length
                                ?
                                <div className="total">
                                    <section className="total__section">
                                        <p>ИТОГО</p>
                                        <p>₽ {splitPrice(total)}</p>
                                    </section>
                                    <section className="total__button" onClick={() => setModal(true)}>
                                        Перейти к оформлению
                                    </section>
                                </div>
                                :
                                ""
                        }
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Basket;