import classes from './ProductCard.module.css'
import rateIcon from '../../../assets/img/rate-icon.svg'

const ProductCard = ({ product, ...props }) => {
    return (
        <main className={classes['product']} {...props}>

            <section
                className={[
                    classes['product__image'],
                    classes['product_flex-center'],
                ].join(" ")}
            >
                <img src={product.imgPath} alt={product.name} />
            </section>

            <article className={classes['product__info']}>
                <section
                    className={[
                        classes['product_horizontal-center'],
                        classes['product__left-section'],
                    ].join(" ")}
                >
                    <p className={classes['product_text']}>
                        {product.name}
                    </p>

                    <div
                        className={[
                            classes['product_text'],
                            classes['product-rate'],
                        ].join(" ")}
                    >
                        <div className={classes['product_fit-content']}>
                            <img src={rateIcon} alt="rate-icon" />
                        </div>

                        <p className={classes['product_fit-content']}>
                            {product.rate}
                        </p>
                    </div>

                </section>

                <section
                    className={[
                        classes['product_horizontal-center'],
                        classes['product__right-section'],
                    ].join(" ")}
                >
                    <div className={[
                        classes['product__price-container'],
                        classes['product_text'],
                    ].join(" ")}
                    >
                        <p className={classes['product_price-color']}>
                            {product.price + ' ₽'}
                        </p>
                        <p className={classes['product__old-price']}>
                            {product.oldPrice ? product.oldPrice + ' ₽' : ''}
                        </p>
                    </div>

                    <div className={[
                        classes['product_text'],
                        classes['product__buy-button'],
                    ].join(" ")}>
                        Купить
                    </div>

                </section>
            </article>

        </main>
    );
}

export default ProductCard;