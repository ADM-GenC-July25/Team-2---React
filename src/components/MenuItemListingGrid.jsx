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
            <h2 className="text-[2.2em] font-bold mb-6 bg-gradient-to-r from-[#ff6b6b] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] text-center capitalize tracking-wide">
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

