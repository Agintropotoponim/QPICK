import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from './ProductList.module.css';
import Modal from "../Modal/Modal";


const ProductList = ({ title, products, addToBasket }) => {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modal, setModal] = useState(false);

    const chooseProduct = (product) => {
        setSelectedProduct(product);
        setModal(true);
    }

    return (
        <section className={classes['list']}>

            <p className={classes['title']}>{title}</p>

            <section className={classes['section_alignment']}>
                <div className={classes['container']}>
                    {products.map(product =>
                        <ProductCard key={product.id} product={product} addToBasket={addToBasket} chooseProduct={chooseProduct} />
                    )}
                </div>
                <Modal isModal={modal} setIsModal={setModal}>
                    <p className={classes['title']}>
                        {selectedProduct?.name}
                    </p>
                </Modal>
            </section>

        </section>
    );
}

export default ProductList;