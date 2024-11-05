import useFetch  from "../../hooks/useFetch";
import ProductCard from "../../components/productCard/ProductCard";

const ProductDashboard = () => {

  const { data, loading, error } = useFetch(`/products`);

  if (loading) return <p>Loading products...</p>;

  if (error) return;

  return (

    <div>
      <h2>Dashboard de productos</h2>
      <div className="product-card-container">

        {data ?

          data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
          :
          <h3>No tenemos productos para mostrar</h3>
        }
      </div>
    </div>
  );
};

export default ProductDashboard;