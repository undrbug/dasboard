import {Link} from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => (

  <div className="product-card">
    <div className="product-card-header">
      <h3>{product.name}</h3>
    </div>
    <div className="product-card-body">
      <p>Descripcion: <span>{product.drink_description}</span></p>
      <p>Precio: <span>{product.price}</span></p>
      <Link to={`/producto/${product.id}`}>Detalles</Link>
    </div>
  </div>

)
  
export default ProductCard;