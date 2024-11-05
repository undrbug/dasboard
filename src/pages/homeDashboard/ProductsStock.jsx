
const ProductsStock = (products) => {
    
    products = products.products;

    return (

        <div className="dashboard-container">
            <div className="dashboard-panel">
                <p>Productos en Stock:</p>
                <ul>
                    {products.stockByCategory && Object.keys(products.stockByCategory).length === 0 && <li>No hay stock</li>}
                    {products.stockByCategory && Object.keys(products.stockByCategory).map((stock) => (
                        <li key={stock}>
                            {stock}: <span>{products.stockByCategory[stock]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductsStock