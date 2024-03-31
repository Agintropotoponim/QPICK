import classes from './BasketCard.module.css'
import removeButton from '../../../assets/img/remove-button.svg'
import { useContext, useState } from 'react';
import { BasketContext } from '../../../context/BasketContext';

const BasketCard = ({ product, splitPrice }) => {

    let amount = product.amount;

    const { basket, setBasket } = useContext(BasketContext);

    const plusAmount = () => {
        let index = basket.findIndex(pr => pr.id === product.id);
        const newBasket = [...basket];
        newBasket[index].amount += 1;
        newBasket[index].totalPrice = newBasket[index].amount * newBasket[index].price
        setBasket(newBasket);
    }

    const minusAmount = () => {
        let index = basket.findIndex(pr => pr.id === product.id);
        const newBasket = [...basket];
        if (newBasket[index].amount == 1) return;
        newBasket[index].amount -= 1;
        newBasket[index].totalPrice = newBasket[index].amount * newBasket[index].price
        setBasket(newBasket);
    }

    const deleteFromBasket = () => {
        setBasket(basket.filter(pr => pr.id !== product.id))
    }

    return (
        <div className={classes.card}>

            <section>
                <div>
                    <img src={product.imgPath} alt="product image" className={classes['card__img']} />
                </div>
                <div>
                    <div className={classes['card__amount-container']}>
                        <div
                            className={[classes['card__button'], classes['card__button-minus']].join(" ")}
                            onClick={() => minusAmount()}
                        />
                        <p className={classes['card__text']}>{amount}</p>
                        <div className={[classes['card__button'], classes['card__button-plus']].join(" ")}
                            onClick={() => plusAmount()}
                        />
                    </div>

                </div>

            </section>
            <div className={classes['card__info']}>
                <p className={classes['card__name']}>{product.name}</p>
                <p className={classes['card__price']}>{splitPrice(product.price)} ₽</p>
            </div>
            <div className={classes['card__right-panel']}>
                <div className={classes['card__remove-button_position']}>
                    <img src={removeButton} alt="remove-button" className={classes['card__remove-button']} onClick={() => deleteFromBasket()} />
                </div>
                <div className={classes['card__total-price_position']}>
                    <p className={classes['card__total-price']}>{splitPrice(product.totalPrice)} ₽</p>
                </div>
            </div>

            <div>

            </div>

        </div>
    );
}

export default BasketCard;