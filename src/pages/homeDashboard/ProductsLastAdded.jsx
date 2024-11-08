
const ProductsLastAdded = (props) => {

    const { products } = props;

    return (
        <>
            <p>Ultimo producto agregado:</p>
            <ul>
                {products.lastProductAdded && Object.keys(products.lastProductAdded).length === 0 && <li>Todavia no hay productos</li>}
                {products.lastProductAdded && Object.keys(products.lastProductAdded).map((item) => (
                    <li key={item}>
                        {item}: <span>{products.lastProductAdded[item]}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductsLastAdded;
