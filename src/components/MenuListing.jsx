import MenuItem from "./MenuItem";

function MenuItemListing({ menuItem, addToCart }) {
  return <MenuItem item={menuItem} addToCart={addToCart} />;
}

export default MenuItemListing;
