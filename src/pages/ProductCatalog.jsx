import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/UI/ProductList/ProductList";
import '../styles/Products.css'
import { products } from "../data";
import { BasketContext } from "../context/BasketContext";
import { useContext } from "react";


const ProductCatalog = () => {

    const { basket, setBasket } = useContext(BasketContext);

    const addToBasket = (product) => {

        //I could make a new Set() state, but this way is shorter
        if (~basket.findIndex(pr => pr.id === product.id)) return

        product['amount'] = 1;
        product['totalPrice'] = product.price;

        setBasket([...basket, product]);
    }

    return (
        <section className="product-page">
            <div className="product-catalog">

                <section>
                    <Header />
                    <div className="product-list">
                        <section className="product-list__section">
                            <section>
                                <ProductList title={"Наушники"} products={products.filter(p => p.wired)} addToBasket={addToBasket} />
                            </section>
                            <section className="product-list_margin-top">
                                <ProductList title={"Беспроводные наушники"} products={products.filter(p => !p.wired)} addToBasket={addToBasket} />
                            </section>
                        </section>
                    </div>
                </section>
            </div>
            <section>
                <Footer />
            </section>
        </section>
    );
}

export default ProductCatalog;