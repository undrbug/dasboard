import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';

const ProductDetail = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch(`/products/${id}`);

    if (loading) return <p>Loading product...</p>;
    if (error) return;

    return (
        <div>
            <h2>Detalle del producto</h2>
            <div className="product-detail">
                <h3>{data?.product?.name}</h3>
                <p>{data?.product?.description}</p>
                <p>${data?.product?.price}</p>
            </div>
        </div>
    );
};

export default ProductDetail;