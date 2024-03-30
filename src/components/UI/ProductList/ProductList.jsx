import ProductCard from "../ProductCard/ProductCard";
import classes from './ProductList.module.css'

const ProductList = ({ title, products }) => {
    return (
        <section className={classes['list']}>

            <p className={classes['title']}>{title}</p>

            <section className={classes['section_alignment']}>
                <div className={classes['container']}>
                    {products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </section>

        </section>
    );
}

export default ProductList;