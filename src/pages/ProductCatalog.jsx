import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/UI/ProductList/ProductList";
import '../styles/Products.css'
import { products } from "../data";


const ProductCatalog = () => {
    return (
        <div className="product-catalog">
            <Header />
            <div className="product-list">
                <section className="product-list__section">
                    <section>
                        <ProductList title={"Наушники"} products={products.filter(p => p.wired)} />
                    </section>
                    <section className="product-list_margin-top">
                        <ProductList title={"Беспроводные наушники"} products={products.filter(p => !p.wired)} />
                    </section>
                </section>
            </div>
            <Footer />

        </div>
    );
}

export default ProductCatalog;