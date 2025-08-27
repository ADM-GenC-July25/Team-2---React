import { useParams, useNavigate } from "react-router-dom";
import MenuItem from "./components/MenuItem";
import menuData from "./assets/menuData";
import { useCart } from "./CartContext";

function MenuItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find the menu item by ID across all categories
  const menuItem = menuData.find((item) => item.id === parseInt(id));

  // If menu item not found, show error message
  if (!menuItem) {
    return (
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold mb-2">Menu Item Not Found</h1>
        <p>The menu item you're looking for doesn't exist.</p>
      </div>
    );
  }

  const handleAddToCartAndRedirect = () => {
    addToCart(menuItem);
    navigate("/cart");
  };

  return (
    <div className="p-5 flex flex-col items-center min-h-[80vh] bg-gradient-to-br from-[#0c0c1e] via-[#1a1a2e] to-[#16213e]">
      <h1 className="mb-8 text-center text-4xl font-bold bg-gradient-to-r from-[#ff6b6b] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
        Menu Item Details
      </h1>
      <div className="max-w-xl w-full flex flex-col items-center">
        <MenuItem item={menuItem} addToCart={handleAddToCartAndRedirect} />
        <div className="my-10 py-5 rounded-xl bg-black/40 w-full shadow-lg border border-[#45b7d1]">
          <h3 className="text-lg font-semibold mb-2 text-[#45b7d1] px-5">
            Description
          </h3>
          <p className="text-[#b8b8d1] px-5">{menuItem.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItemPage;
