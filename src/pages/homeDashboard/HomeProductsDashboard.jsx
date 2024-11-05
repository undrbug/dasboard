import useFetch from "../../hooks/useFetch";
import ProductsTotal from "./ProductsTotal";
import ProductsStock from "./ProductsStock";
import './HomeDashboard.css';

const HomeProductsDashboard = () => {

    const { data: products, loading, error } = useFetch(`/products?limit=1000`);


    return (
        <>
            <div className="title">
                <h2>Informacion sobre productos</h2>
                <ProductsTotal products={products} />
                <ProductsStock products={products} />
            </div>

        </>
    );
}

export default HomeProductsDashboard;
