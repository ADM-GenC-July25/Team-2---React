import menuData from "./assets/menuData";
import MenuItemGrid from "./components/MenuItemListingGrid";
import { useState } from "react";

function MenuPage() {
  const [searchText, setSearchText] = useState("");
  const DEFAULT_SEARCH_BAR_VALUE = "search menu items...";

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        paddingTop: "20px"
      }}>
        <input
          onChange={(event) => handleSearchTextChange(event)}
          value={searchText}
          placeholder={DEFAULT_SEARCH_BAR_VALUE}
          style={{
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "400px"
          }}
        />
      </div>
      <MenuItemGrid menuData={menuData} searchTerm={searchText} />
    </div>
  );
}

export default MenuPage;
