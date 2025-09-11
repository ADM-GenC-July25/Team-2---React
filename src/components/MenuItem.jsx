import "../styles/MenuItem.css";
import { useCart } from "../CartContext";

function MenuItem({ item, addToCart }) {
  const { addToCart: addToCartContext } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (addToCart) {
      addToCart();
    } else {
      addToCartContext(item);
      // alert(`${item.name} added to cart!`)
    }
  };

  return (
    <div className="menuitem-container" onClick={handleAddToCart}>
      {item.img && (
        <img src={item.img} alt={item.description} className="menuitem-image" />
      )}
      <div className="menuitem-content">
        <h3 className="menuitem-title">{item.name}</h3>
        <p className="menuitem-description">{item.description}</p>
        <div className="menuitem-price">{item.price.toFixed(2)}</div>
      </div>
      <button className="menuitem-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
