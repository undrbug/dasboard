import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import { URL_BASE_IMG } from "../../hooks/useFetch";
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    const { data: product, loading, error } = useFetch(`/products/${id}`);
    if (loading) return <p>Loading product...</p>;
    if (error) return;

    return (
        <div className="product-card">
            <div className="product-card-header">
                <h3>{product.name}</h3>
                <p className="product-brand">{product.brand}</p>
            </div>
            <div className="product-card-body">
                <div className="image">
                    <img src={`${URL_BASE_IMG}${product.Image}`} alt={product.name} />
                </div>
                <p className="product-description">{product.drink_description}</p>
                <p>Tipo: <span>{product.drink_type}</span></p>
                <p>Presentación: <span>{product.Presentation} ml</span></p>
                <p>Precio: <span>${product.price}</span></p>
                <p>Stock: <span>{product.Stock}</span></p>
            </div>
        </div>
    );
};

export default ProductDetail;