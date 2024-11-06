import useFetch from "../../hooks/useFetch";
import ProductsTotal from "./ProductsTotal";
import ProductsStock from "./ProductsStock";
import ProductsLastAdded from "./ProductsLastAdded";
import './HomeDashboard.css';

const HomeProductsDashboard = () => {

    const { data: products, loading, error } = useFetch(`/products?limit=1000`);


    return (
        <>
            <div className="title">
                <h2>Informacion sobre productos</h2>
            </div>
            <div className="dashboard-container">
                <div className="dashboard-panel">
                    <ProductsTotal products={products} />

                </div>
            </div>

            <div className="dashboard-container">
                <div className="dashboard-panel">
                    <ProductsStock products={products} />
                </div>
            </div>

            <div className="dashboard-container">
                <div className="dashboard-panel">
                    <ProductsLastAdded products={products} />

                </div>
            </div>

        </>
    );
}

export default HomeProductsDashboard;
