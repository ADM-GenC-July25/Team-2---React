import MenuItemListing from "./MenuListing";

function MenuItemGrid({ menuData, searchTerm }) {
  // Flatten all menu items from all categories
  const allMenuItems = menuData.flatMap(category => category.items);
  
  // Filter items based on search term
  let filteredList = allMenuItems.filter((menuItem) => {
    return menuItem.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {menuData.map((category) => {
        const categoryItems = category.items.filter((menuItem) => {
          return menuItem.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (categoryItems.length === 0) return null;

        return (
          <div key={category.category} style={{ marginBottom: "32px" }}>
            <h2 style={{ 
              marginBottom: "24px", 
              color: "white",
              textAlign: "center",
              fontSize: "2em",
              fontWeight: "bold",
              textTransform: "capitalize",
              letterSpacing: "1px"
            }}>
              {category.category}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
              }}
            >
              {categoryItems.map((menuItem) => (
                <MenuItemListing key={menuItem.id} menuItem={menuItem} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItemGrid;

