

const ProductsTotal = (products) => {

    products = products.products;

    return (
        <>
            <p>Total de Productos: <span>{products.totalProducts}</span></p>
            <p>Cantidad por Categorías:</p>
            <ul>
                {products.countByCategory && Object.keys(products.countByCategory).length === 0 && <li>No hay categorías</li>}
                {products.countByCategory && Object.keys(products.countByCategory).map((category) => (
                    <li key={category}>
                        {category}: <span>{products.countByCategory[category]}</span>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default ProductsTotal;
