import MenuItemListing from "./MenuListing";

function MenuItemListingGrid({ menuData, searchTerm }) {
  function populateItems() {
    const groupedByCategory = menuData.reduce((acc, item) => {
      const category = item.category;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(item);
      return acc;
    }, {});

    return groupedByCategory;
  }

  var menu = populateItems();

  return (
    <div>
      {Object.entries(menu).map(([categoryName, items]) => {
        const categoryItems = items.filter((menuItem) =>
          menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (categoryItems.length === 0) return null;

        return (
          <div key={categoryName} style={{ marginBottom: "32px" }}>
            <h2 className="text-[2.2em] font-bold mb-6 bg-gradient-to-r from-[#ff6b6b] via-[#45b7d1] to-[#96ceb4] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] text-center capitalize tracking-wide">
              {categoryName}
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

export default MenuItemListingGrid;
