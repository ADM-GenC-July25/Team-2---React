import MenuItem from './MenuItem';

function MenuItemListing({ menuItem, addToCart, openItemPage }) {
  return (
    <MenuItem 
      item={menuItem} 
      addToCart={addToCart} 
      openItemPage={openItemPage} 
    />
  );
}

export default MenuItemListing;
